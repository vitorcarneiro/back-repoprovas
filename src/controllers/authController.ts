import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
  const user: authService.CreateUserData = req.body;

  await authService.insert(user);

  res.sendStatus(201);
}