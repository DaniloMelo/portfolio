-- CreateTable
CREATE TABLE "credentials" (
    "id" TEXT NOT NULL,
    "password_hash" VARCHAR(99) NOT NULL,
    "me_id" TEXT NOT NULL,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "credentials_me_id_key" ON "credentials"("me_id");

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_me_id_fkey" FOREIGN KEY ("me_id") REFERENCES "me"("id") ON DELETE CASCADE ON UPDATE CASCADE;
