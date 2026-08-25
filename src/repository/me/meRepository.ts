import { prisma } from "@/libs/prisma/client";
import { IUpdateMe } from "@/types/me";

export async function findMe() {
  return await prisma.me.findFirst();
}

export async function getMeById(id: string) {
  return await prisma.me.findUnique({
    where: {
      id,
    },
  });
}

export async function UpdateMe(me: IUpdateMe) {
  return await prisma.me.update({
    where: {
      id: me.id,
    },
    data: {
      name: me.name,
      email: me.email,
      jobTitle: me.jobTitle,
      avatarUrl: me.avatarUrl,
      introduction: me.introduction,
      about: me.about,
      phone: me.phone,
      linkedInProfileUrl: me.linkedInProfileUrl,
    },
  });
}
