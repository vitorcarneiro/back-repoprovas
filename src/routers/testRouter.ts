import { Router } from 'express';
import { testsByDisciplines, testsByTeachers } from '../controllers/testController.js';
import { ensureAuthenticationMiddleware } from '../middlewares/ensureAthenticationMiddleware.js';

const testRouter = Router();

testRouter.get('/tests/disciplines',ensureAuthenticationMiddleware, testsByDisciplines);
testRouter.get('/tests/teachers', ensureAuthenticationMiddleware, testsByTeachers);

export default testRouter;