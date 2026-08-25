/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `me` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "me_email_key" ON "me"("email");
