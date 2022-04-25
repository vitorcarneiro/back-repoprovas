import prisma from "../database.js";
import { CreateDisciplineData } from "../interfaces/index.js";

export async function insert(CreateDisciplineData: CreateDisciplineData) {
    return prisma.disciplines.create({
        data: CreateDisciplineData
    });
}

export async function findAll() {
    return prisma.disciplines.findMany(
      {
        include: {
          terms: true
        }
      }
    );
}

export async function findById(id: number) {
    return prisma.disciplines.findUnique({
      where: {
        id
      }
    });
}

export async function findByName(name: string) {
    return prisma.disciplines.findMany({
      where: {
        name: {
            contains: name
        }
      }
    });
}

export async function findByTermId(termId: number) {
    return prisma.disciplines.findMany({
      where: {
        termId
      }
    });
}