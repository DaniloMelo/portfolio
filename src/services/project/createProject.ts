import { TechnologyNotFound } from "@/errors/project/TechnologyNotFound";
import { Project } from "@/types/project";
import { createSlug } from "@/utils/createSlug";
import { listTechnologies } from "../technology/listTechnologies";
import { create } from "@/repository/project/create";
import { findLastPosition } from "@/repository/project/findLastPosition";

export async function createProject(project: Omit<Project, "position">) {
  const allTechs = await listTechnologies();
  const allTechsNames = allTechs.map((tech) => tech.name);
  project.technologies.map((tech) => {
    if (!allTechsNames.includes(tech.name)) {
      throw new TechnologyNotFound(`A tecnologia ${tech.name} não existe.`);
    }
  });

  const lastPosition = await findLastPosition();

  const newProject: Project = {
    title: project.title,
    slug: createSlug(project.title),
    description: project.description,
    about: project.about,
    repositoryCodeUrl: project.repositoryCodeUrl,
    deployUrl: project.deployUrl,
    position: lastPosition + 1,
    testUser: project.testUser?.trim() || null,
    testEmail: project.testEmail?.trim() || null,
    testPassword: project.testPassword?.trim() || null,
    technologies: project.technologies,
    images: project.images,
  };

  await create(newProject);
}
