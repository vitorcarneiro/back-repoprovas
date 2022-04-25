import prisma from "../database.js";
import { CreateTestData } from "../interfaces/index.js";

export async function insert(CreateTestData: CreateTestData) {
    return prisma.tests.create({
        data: CreateTestData
    });
}

export async function findAll() {
    return prisma.tests.findMany(
        {
            include: {
                categories: true,
                teachersDisciplines: {
                    include: {
                        teachers: true,
                        disciplines: {
                            include: {
                                terms: true
                            }
                        }
                    }
                }
            }
        }
    );
}

export async function findById(id: number) {
    return prisma.tests.findUnique({
      where: {
        id
      }
    });
}

export async function findByName(name: string) {
    return prisma.tests.findMany({
      where: {
        name: {
            contains: name
        }
      }
    });
}

export async function findByCategoryId(categoryId: number) {
    return prisma.tests.findMany({
      where: {
        categoryId
      }
    });
}

export async function findByTeacherDisciplineId(teacherDisciplineId: number) {
    return prisma.tests.findMany({
      where: {
        teacherDisciplineId
      }
    });
}