import { CreateUserData } from "../interfaces/index.js";
import prisma from "../database.js";

export async function findAll() {
    return prisma.users.findMany();
}

export async function insert(CreateUserData: CreateUserData) {
    return prisma.users.create({
        data: CreateUserData
    });
}

export async function findByEmail(email: string) {
    return prisma.users.findUnique({
      where: {
        email
      }
    });
}