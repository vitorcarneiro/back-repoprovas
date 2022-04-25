import { Router } from 'express';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import * as authSchemas from '../schemas/authSchema.js';
import { testsByDisciplines } from '../controllers/testController.js';

const testRouter = Router();

testRouter.get('/tests/disciplines', testsByDisciplines);

export default testRouter;