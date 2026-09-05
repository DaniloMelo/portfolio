/*
  Warnings:

  - Added the required column `github` to the `me` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "me" ADD COLUMN     "github" VARCHAR(255) NOT NULL;
