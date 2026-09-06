import { TechnologyNotFound } from "@/errors/project/TechnologyNotFound";
import { UpdateProject } from "@/types/project";
import { createSlug } from "@/utils/createSlug";
import { listTechnologies } from "../technology/listTechnologies";
import { update } from "@/repository/project/update";

export async function updateProject(project: UpdateProject) {
  const allTechs = await listTechnologies();
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
    visible: project.visible,
    testUser: project.testUser?.trim() || null,
    testEmail: project.testEmail?.trim() || null,
    testPassword: project.testPassword?.trim() || null,
    technologies: project.technologies,
    images: project.images,
  };

  await update(updatedProject);
}
