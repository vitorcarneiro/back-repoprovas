import { MappedTest } from "../interfaces/index.js";
import * as testRepo from "../repositories/testRepository.js";
import * as termRepo from "../repositories/termRepository.js";
import * as disciplineService from "../services/disciplineService.js";

export async function mappedTests() {
    const rawTests = await testRepo.findAll();

    const tests = rawTests.map(test => {
        const container = {            
            id: test.id,
            name: test.name,
            pdfUrl: test.pdfUrl,
            category: test.categories,
            teacher: test.teachersDisciplines.teachers,
            discipline: {
                id: test.teachersDisciplines.disciplines.id,
                name: test.teachersDisciplines.disciplines.name,
            },
            term: test.teachersDisciplines.disciplines.terms
        };

        return container;
    });

    return tests;
}

export async function testsByTerm() {
    const terms = await termRepo.findAll();
    const tests = await mappedTests();
    const disciplinesByTerm = await disciplineService.disciplinesByTerms();
    
    let container = {};
    terms.forEach(term => {
        container[term.number] = null;
    });

    terms.forEach(term => {
        if (disciplinesByTerm[term.number] !== undefined)
            container[term.number] = arrayToObj(disciplinesByTerm[term.number]);
    });

    tests.forEach(test => {
        if (container[test.term.number][test.discipline.name] === null){
            let obj = {}
            obj[test.category.name] = mapTestForSearch(test);
            container[test.term.number][test.discipline.name] = { ...obj };
            
        } else {
            let obj = {}
            obj[test.category.name] = mapTestForSearch(test);
            container[test.term.number][test.discipline.name] = {
                ...container[test.term.number][test.discipline.name],
                ...obj
            };
        }
    });

    return container;
}

function arrayToObj(array: string[]) {
    let obj = {};
    for (let i = 0; i < array.length ; i++) {
        if (obj[array[i]]) continue;

        obj[array[i]] = null;
    }

    return obj;
}

function mapTestForSearch(test: MappedTest) {
    return {
        id: test.id,
        name: test.name,
        pdfUrl: test.pdfUrl,
        teacher: test.teacher
    }
}