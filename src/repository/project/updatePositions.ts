import { prisma } from "@/libs/prisma/client";
import { ProjectsPosition } from "@/types/project";

export async function updatePositions(projects: ProjectsPosition[]) {
  await prisma.$transaction(
    projects.map((project) =>
      prisma.project.update({
        where: { id: project.id },
        data: { position: project.position },
      }),
    ),
  );
}
