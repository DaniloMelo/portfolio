/*
  Warnings:

  - You are about to drop the `contacts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `me` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedin_profile_url` to the `me` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `me` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_me_id_fkey";

-- AlterTable
ALTER TABLE "me" ADD COLUMN     "email" VARCHAR(255) NOT NULL,
ADD COLUMN     "linkedin_profile_url" VARCHAR(255) NOT NULL,
ADD COLUMN     "phone" VARCHAR(20) NOT NULL;

-- DropTable
DROP TABLE "contacts";
