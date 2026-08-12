import { prisma } from "@/libs/prisma/client";
import { Me } from "@/types/me";

export async function findMe(): Promise<Me | null> {
  return await prisma.me.findFirst();
}

export async function getMeById(id: string): Promise<Me | null> {
  return await prisma.me.findUnique({
    where: {
      id,
    },
  });
}
