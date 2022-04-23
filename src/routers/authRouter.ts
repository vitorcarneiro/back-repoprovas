import { Router } from 'express';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import * as authSchemas from '../schemas/authSchema.js';
import { signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/sign-up', validateSchemaMiddleware(authSchemas.signup), signUp);

export default authRouter;