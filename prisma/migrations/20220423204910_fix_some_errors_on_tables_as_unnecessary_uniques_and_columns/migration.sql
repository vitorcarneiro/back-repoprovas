/*
  Warnings:

  - You are about to drop the column `number` on the `disciplines` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `teachersDisciplines` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "disciplines_number_key";

-- DropIndex
DROP INDEX "teachersDisciplines_number_key";

-- DropIndex
DROP INDEX "tests_name_key";

-- AlterTable
ALTER TABLE "disciplines" DROP COLUMN "number";

-- AlterTable
ALTER TABLE "teachersDisciplines" DROP COLUMN "number";
