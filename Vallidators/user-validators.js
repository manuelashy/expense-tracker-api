import Joi from "joi";

export const addUserValidator = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
