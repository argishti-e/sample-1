import joi from 'joi'

export default {
  registration: joi.object({
    firstName: joi.string()
      .trim()
      .min(2)
      .max(20)
      .required(),

    lastName: joi.string()
      .trim()
      .min(3)
      .max(20)
      .required(),

    email: joi.string()
      .trim()
      .email()
      .required(),

    password: joi.string()
      .trim()
      .min(8)
      .max(16)
      .required()
  }),

  login: joi.object({
    email: joi.string()
      .trim()
      .email()
      .required(),
    password: joi.string()
      .trim()
      .min(8)
      .max(16)
      .required()
  }),
}
