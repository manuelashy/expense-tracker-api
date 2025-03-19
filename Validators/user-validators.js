import Joi from "joi";

export const userRegistrationValidator = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
}).with("password", "confirmPassword");

export const userLoginValidator = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
