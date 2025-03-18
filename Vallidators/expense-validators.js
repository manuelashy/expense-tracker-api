import Joi from "joi";

export const addExpenseValidator = Joi.object({
  title: Joi.string().required(),
  amount: Joi.number().required(),
  category: Joi.string().required(),
});
