import * as disciplineRepo from "../repositories/disciplineRepository.js";

export async function mappedDisciplines() {
    const rawDisciplines = await disciplineRepo.findAll();

    const disciplines = rawDisciplines.map(discipline => {
        const container = {            
            id: discipline.id,
            name: discipline.name,
            term: discipline.terms
        };

        return container;
    });

    return disciplines;
}

export async function disciplinesByTerms() {
    const disciplines = await mappedDisciplines();

    let disciplinesByTerm = {}
    for(let discipline of disciplines) {
        if(disciplinesByTerm[discipline.term.number]) {
            if (disciplinesByTerm[discipline.term.number].includes(discipline.name)) continue;
            disciplinesByTerm[discipline.term.number].push(discipline.name);
            
        } else {
            disciplinesByTerm[discipline.term.number] = [ discipline.name ];
        }
    }

    return disciplinesByTerm;
}