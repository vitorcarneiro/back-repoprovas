import joi from 'joi';
import { CreateUserData } from "../interfaces/index.js";

export const userJoi = joi.object<CreateUserData>({
  email: joi.string().email().required(),
  password: joi.string().min(4).max(12).required()
});