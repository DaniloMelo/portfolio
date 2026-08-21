/*
  Warnings:

  - Added the required column `position` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "position" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "projects_position_idx" ON "projects"("position");
