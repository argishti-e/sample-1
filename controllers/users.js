import md5 from 'md5';
import HttpError from "http-errors";

import usersModel from '../models/users.js';

const { USER_PASSWORD_SECRET } = process.env;

export default {
  async registration(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body;

      const emailUsed = await usersModel.getUserByEmail(email)

      if (emailUsed) {
        throw new HttpError(422, "Email already exists!");
      }

      const { newUser } = await usersModel.create({
        firstName,
        lastName,
        email,
        password: md5(md5(password) + USER_PASSWORD_SECRET),
      })

      res.json({
        message: "Registration successfully",
        user: newUser,
      });
    } catch (e) {
      res.status(500).send({
        error: e
      })
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      // todo

      res.json({
        message: "Login successfully",
        token: '....',
      });
    } catch (e) {
      res.status(500).send({
        error: e
      })
    }
  },

  async profile(req, res) {
    try {
      const userId = req.userId;

      // todo

      res.json({
        message: "Login successfully",
        token: '....',
      });
    } catch (e) {
      res.status(500).send({
        error: e
      })
    }
  }
}
