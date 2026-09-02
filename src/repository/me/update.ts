import { prisma } from "@/libs/prisma/client";
import { IUpdateMe } from "@/types/me";

export async function update(me: IUpdateMe) {
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
