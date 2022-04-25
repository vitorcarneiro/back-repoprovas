import prisma from "../database.js";
import { CreateTeacherData } from "../interfaces/index.js";

export async function insert(CreateTeacherData: CreateTeacherData) {
    return prisma.teachers.create({
        data: CreateTeacherData
    });
}

export async function findAll() {
    return prisma.teachers.findMany();
}

export async function findById(id: number) {
    return prisma.teachers.findUnique({
      where: {
        id
      }
    });
}

export async function findByName(name: string) {
    return prisma.teachers.findMany({
      where: {
        name: {
            contains: name
        }
      }
    });
} 