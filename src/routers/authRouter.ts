import { Router } from 'express';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import * as authSchemas from '../schemas/authSchema.js';
import { signUp, signIn } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/sign-up', validateSchemaMiddleware(authSchemas.userJoi), signUp);
authRouter.post('/sign-in', validateSchemaMiddleware(authSchemas.userJoi), signIn);

export default authRouter;