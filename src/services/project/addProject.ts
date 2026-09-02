import { TechnologyNotFound } from "@/errors/project/TechnologyNotFound";
import { findLastProjectPosition } from "@/repository/project/projectRepository";
import { Project } from "@/types/project";
import { createSlug } from "@/utils/createSlug";
import { findTechnologiesService } from "../technology/findTechnologiesService";
import { createProjectRepository } from "@/repository/project/createProjectRepository";

export async function addProject(project: Omit<Project, "position">) {
  const allTechs = await findTechnologiesService();
  const allTechsNames = allTechs.map((tech) => tech.name);
  project.technologies.map((tech) => {
    if (!allTechsNames.includes(tech.name)) {
      throw new TechnologyNotFound(`A tecnologia ${tech.name} não existe.`);
    }
  });

  const lastProjectPosition = await findLastProjectPosition();

  const newProject: Project = {
    title: project.title,
    slug: createSlug(project.title),
    description: project.description,
    about: project.about,
    repositoryCodeUrl: project.repositoryCodeUrl,
    deployUrl: project.deployUrl,
    position: lastProjectPosition + 1,
    technologies: project.technologies,
    images: project.images,
  };

  await createProjectRepository(newProject);
}
