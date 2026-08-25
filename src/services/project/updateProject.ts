import { TechnologyNotFound } from "@/errors/project/TechnologyNotFound";
import {
  findTechnologies,
  updateById,
} from "@/repository/project/projectRepository";
import { UpdateProject } from "@/types/project";
import { createSlug } from "@/utils/createSlug";

export async function updateProject(project: UpdateProject) {
  const allTechs = await findTechnologies();
  const allTechsNames = allTechs.map((tech) => tech.name);
  project.technologies.map((tech) => {
    if (!allTechsNames.includes(tech.name)) {
      throw new TechnologyNotFound(`A tecnologia ${tech.name} não existe.`);
    }
  });

  const updatedProject = {
    id: project.id,
    title: project.title,
    slug: createSlug(project.title),
    description: project.description,
    about: project.about,
    repositoryCodeUrl: project.repositoryCodeUrl,
    deployUrl: project.deployUrl,
    position: project.position,
    technologies: project.technologies,
    images: project.images,
  };

  await updateById(updatedProject);
}
