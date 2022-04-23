import joi from 'joi';
import { CreateUserData } from '../services/authService';

export const signup = joi.object<CreateUserData>({
  email: joi.string().email().required(),
  password: joi.string().min(4).max(12).required()
});