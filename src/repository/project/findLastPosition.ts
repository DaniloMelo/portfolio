import { prisma } from "@/libs/prisma/client";

export async function findLastPosition(): Promise<number> {
  const { _max } = await prisma.project.aggregate({
    _max: {
      position: true,
    },
  });

  const position = _max.position ?? 0;

  return position;
}
