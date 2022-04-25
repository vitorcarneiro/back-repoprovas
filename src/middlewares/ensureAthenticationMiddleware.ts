import { NextFunction, Request, Response } from 'express';
import jwt from "jsonwebtoken";
import * as authService from "../services/authService.js";
import { unauthorized } from './handleErrorsMiddleware.js';

export async function ensureAuthenticationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const auth = req.headers['authorization'];
    if (!auth) throw unauthorized("Missing authorization header");
    console.log('auth', auth);
    
    const token = auth.replace("Bearer ", "");
    console.log('token', token);
    if (!token) throw unauthorized("Missing token");

    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as {
        userId: number;
    };
    
    const user = await authService.findById(userId);
    res.locals.user = user;
    
    console.log(user);
    
    next();
}