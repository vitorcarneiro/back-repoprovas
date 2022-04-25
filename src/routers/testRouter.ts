import { Router } from 'express';
import { testsByDisciplines, testsByTeachers } from '../controllers/testController.js';

const testRouter = Router();

testRouter.get('/tests/disciplines', testsByDisciplines);
testRouter.get('/tests/teachers', testsByTeachers);

export default testRouter;