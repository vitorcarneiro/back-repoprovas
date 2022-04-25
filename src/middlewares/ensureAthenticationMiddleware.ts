import { NextFunction, Request, Response } from 'express';
import { unauthorized } from './handleErrorsMiddleware.js';

export function ensureAuthenticationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const auth = req.headers['authorization'];
    if (!auth) throw unauthorized("Missing authorization header");

    const token = auth.replace("Bearer ", "");
    if (!token) throw unauthorized("Missing token");

    


}