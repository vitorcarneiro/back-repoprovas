import { Router } from 'express';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import * as authSchemas from '../schemas/authSchema.js';

const authRouter = Router();

authRouter.post('/sign-up', validateSchemaMiddleware(authSchemas.signup));

export default authRouter;