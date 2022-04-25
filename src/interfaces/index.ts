import { Users, Tests, Disciplines, Teachers, Categories, Terms } from "@prisma/client";

export type CreateUserData = Omit<Users, "id">;

export type CreateTestData = Omit<Tests, "id">;

export interface CreateNewTest {
    name: string;
    pdfUrl: string;
    category: string;
    teacher?: string;
    discipline?: string;
}

export type CreateDisciplineData = Omit<Disciplines, "id">;

export type CreateTeacherData = Omit<Teachers, "id">;

export interface MappedTest {
    id: number;
    name: string;
    pdfUrl: string;
    category: Categories;
    teacher: Teachers;
    discipline: {
        id: number;
        name: string;
    };
    term: Terms;
};