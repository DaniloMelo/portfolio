/*
  Warnings:

  - You are about to drop the `project_images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "project_images" DROP CONSTRAINT "project_images_project_id_fkey";

-- DropTable
DROP TABLE "project_images";

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "src" VARCHAR(255) NOT NULL,
    "alt" VARCHAR(99) NOT NULL,
    "project_id" TEXT NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
