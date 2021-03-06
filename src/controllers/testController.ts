import { Request, Response } from "express";
import * as testService from "../services/testService.js";

export async function testsByDisciplines(req: Request, res: Response) {
    const tests = await testService.testsByTerm();

    res.send(tests);
}

export async function testsByTeachers(req: Request, res: Response) {
    const tests = await testService.testByTeacher();

    res.send(tests);
}