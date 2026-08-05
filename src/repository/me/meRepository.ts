import { prisma } from "@/libs/prisma/client";
import { Me } from "@/types/me";

export async function findMe(): Promise<Me | null> {
  const data = await prisma.me.findFirst({
    include: {
      contact: true,
    },
  });

  if (!data || !data.contact) return null;

  return {
    name: data.name,
    avatarUrl: data.avatarUrl,
    jobTitle: data.jobTitle,
    introduction: data.introduction,
    about: data.about,
    contact: {
      email: data.contact.email,
      phone: data.contact.phone,
      linkedInProfileUrl: data.contact.linkedInProfileUrl,
    },
  };
}
