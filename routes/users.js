import { Router } from 'express';

import validate from "../middlewares/validate.js";
import schema from "../schemas/users.js";

import userController from "../controllers/users.js";
import checkToken from "../middlewares/checkToken.js";

const router = Router();

// views
router.get(
  '/registration',
  (req, res) => {
    res.render('registration', {});
  },
);

router.get(
  '/login',
  (req, res) => {
    res.render('login', {});
  },
);

router.get(
  '/profile',
  (req, res) => {
    res.render('profile', {});
  },
);


// apis
router.post(
  '/registration',
  validate(schema.registration, 'body'),
  userController.registration,
);

router.post(
  '/login',
  validate(schema.login, 'body'),
  userController.login,
);

router.post(
  '/profile',
  checkToken,
  userController.profile,
);

export default router;
