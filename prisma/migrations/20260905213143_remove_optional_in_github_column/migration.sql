/*
  Warnings:

  - Made the column `github` on table `me` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "me" ALTER COLUMN "github" SET NOT NULL;
