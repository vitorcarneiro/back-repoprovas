import { Users } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import * as authRepo from "../repositories/authRepository.js"
import * as error from '../middlewares/handleErrorsMiddleware.js'

dotenv.config();

export type CreateUserData = Omit<Users, "id">;

export async function insert(createUserData: CreateUserData) {
    const existingUser = await authRepo.findByEmail(createUserData.email);

    if (existingUser)
      throw error.conflict('email in use');
  
    const hashedPassword = bcrypt.hashSync(createUserData.password, 12);
  
    await authRepo.insert({ ...createUserData, password: hashedPassword });
}