import { prisma } from "@/libs/prisma/client";
import { Me } from "@/types/me";

export async function findMe(): Promise<Me | null> {
  const data = await prisma.me.findFirst({
    select: {
      name: true,
      avatarUrl: true,
      jobTitle: true,
      introduction: true,
      about: true,
      email: true,
      phone: true,
      linkedInProfileUrl: true,
    },
  });

  if (!data) return null;

  return data;
}
