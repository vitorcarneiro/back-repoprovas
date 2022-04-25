/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `disciplines` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `disciplines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "disciplines" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "disciplines_name_key" ON "disciplines"("name");
