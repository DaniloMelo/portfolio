import { RepositionProjectError } from "@/errors/project/RepositionProjectError";
import { ProjectsPosition } from "@/types/project";

export function validateProjectsPosition(projects: ProjectsPosition[]) {
  const positions = new Map<number, string>();

  projects.forEach((project) => {
    if (project.position <= 0) {
      throw new RepositionProjectError(
        `O projeto '${project.title}' deve ter uma posição maior que zero.`,
      );
    }

    const duplicated = positions.get(project.position);
    if (duplicated) {
      throw new RepositionProjectError(
        `Os projetos '${duplicated}' e '${project.title}' tem a mesma posição (${project.position}).`,
      );
    }

    positions.set(project.position, project.title);
  });

  for (
    let expectedPosition = 1;
    expectedPosition < projects.length;
    expectedPosition++
  ) {
    if (!positions.get(expectedPosition)) {
      throw new RepositionProjectError(`Posição ${expectedPosition} ausente.`);
    }
  }
}
