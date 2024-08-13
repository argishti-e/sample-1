import _ from "lodash";
import db from '../clients/db.mysql.js';

export default {
  async getUserByEmail(email) {
    const data = await db.query(`
        SELECT *
        FROM users
        WHERE email = ?
        LIMIT 1;
    `, [email]);

    return _.head(_.head(data)) || null;
  },

  async create({ firstName, lastName, email, password }) {
    const [raws] = await db.query(`
        INSERT INTO users (firstName, lastName, email, password)
        VALUES (?, ?, LOWER(?), ?);
    `, [firstName, lastName, email, password]);

    const newUser = await this.getUserByEmail(email);

    return { newUser, raws };
  }
}
