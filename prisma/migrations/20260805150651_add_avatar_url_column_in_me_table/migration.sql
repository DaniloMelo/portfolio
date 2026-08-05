/*
  Warnings:

  - Added the required column `avatar_url` to the `me` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "me" ADD COLUMN     "avatar_url" VARCHAR(255) NOT NULL;
