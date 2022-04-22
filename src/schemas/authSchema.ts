import joi from 'joi';

export const signup = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(4).max(12).required()
});