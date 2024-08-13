import db from './clients/db.mysql.js';

async function main() {
  await db.query(`
      CREATE TABLE IF NOT EXISTS users
      (
          id        BIGINT              NOT NULL AUTO_INCREMENT,
          firstName VARCHAR(50)         NOT NULL,
          lastName  VARCHAR(50)         NOT NULL,
          email     VARCHAR(100) UNIQUE NOT NULL,
          password  VARCHAR(50),
          PRIMARY KEY (id)
      );
  `)
}

main().catch(console.error)
