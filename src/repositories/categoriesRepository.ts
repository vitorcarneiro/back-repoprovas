import prisma from "../database.js";

export async function findAll() {
    return prisma.categories.findMany();
}