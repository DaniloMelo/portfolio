-- CreateTable
CREATE TABLE "me" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "job_title" VARCHAR(255) NOT NULL,
    "introduction" VARCHAR(255) NOT NULL,
    "about" TEXT NOT NULL,

    CONSTRAINT "me_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "linkedin_profile_url" VARCHAR(255) NOT NULL,
    "me_id" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "slug" VARCHAR(99) NOT NULL,
    "title" VARCHAR(99) NOT NULL,
    "description" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "repository_code_url" VARCHAR(255) NOT NULL,
    "deploy_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_images" (
    "id" TEXT NOT NULL,
    "src" VARCHAR(255) NOT NULL,
    "alt" VARCHAR(99) NOT NULL,
    "project_id" TEXT NOT NULL,

    CONSTRAINT "project_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technologies" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "technologies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects_technologies" (
    "project_id" TEXT NOT NULL,
    "technology_id" TEXT NOT NULL,

    CONSTRAINT "projects_technologies_pkey" PRIMARY KEY ("project_id","technology_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contacts_me_id_key" ON "contacts"("me_id");

-- CreateIndex
CREATE UNIQUE INDEX "projects_slug_key" ON "projects"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "technologies_name_key" ON "technologies"("name");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_me_id_fkey" FOREIGN KEY ("me_id") REFERENCES "me"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_images" ADD CONSTRAINT "project_images_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_technology_id_fkey" FOREIGN KEY ("technology_id") REFERENCES "technologies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
