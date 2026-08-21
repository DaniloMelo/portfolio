import { ProjectsPosition } from "@/types/project";
import { repositionProjects } from "@/repository/project/projectRepository";
import { validateProjectsPosition } from "./validateProjectsPosition";

export async function changeProjectsPosition(newPositions: ProjectsPosition[]) {
  validateProjectsPosition(newPositions);

  await repositionProjects(newPositions);
}
