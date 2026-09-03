import { ProjectsPosition } from "@/types/project";
import { validateProjectsPosition } from "./validateProjectsPosition";
import { updatePositions } from "@/repository/project/updatePositions";

export async function repositionProjects(newPositions: ProjectsPosition[]) {
  validateProjectsPosition(newPositions);

  await updatePositions(newPositions);
}
