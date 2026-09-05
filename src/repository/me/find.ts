import { prisma } from "@/libs/prisma/client";

export async function find() {
  const me = await prisma.me.findFirst();

  if (!me) {
    return null;
  }

  return me;
}
