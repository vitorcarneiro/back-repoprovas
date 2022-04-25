import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { CreateUserData } from "../interfaces/index.js";
import * as authRepo from "../repositories/authRepository.js"
import * as error from '../middlewares/handleErrorsMiddleware.js'

dotenv.config();

export async function insert(createUserData: CreateUserData) {
    const existingUser = await authRepo.findByEmail(createUserData.email);

    if (existingUser)
      throw error.conflict('E-mail in use');
  
    const hashedPassword = bcrypt.hashSync(createUserData.password, 12);
  
    await authRepo.insert({ ...createUserData, password: hashedPassword });
}

export async function signIn({ email, password }: CreateUserData) {
    const user = await authRepo.findByEmail(email);
    if (!user) throw error.unauthorized("Invalid credentials");
    
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid)
    throw error.unauthorized("Invalid credentials");
    
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    return token;
  }