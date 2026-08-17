import { TechnologyNotFound } from "@/errors/project/TechnologyNotFound";
import {
  createProject,
  findTechnologies,
} from "@/repository/project/projectRepository";
import { Project } from "@/types/project";

export async function addProject(project: Project) {
  const allTechs = await findTechnologies();
  const allTechsNames = allTechs.map((tech) => tech.name);
  project.technologies.map((tech) => {
    if (!allTechsNames.includes(tech.name)) {
      throw new TechnologyNotFound(`A tecnologia ${tech.name} não existe.`);
    }
  });

  await createProject(project);
}
