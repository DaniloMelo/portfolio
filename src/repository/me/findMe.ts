import { prisma } from "@/libs/prisma/client";

export async function findMe() {
  return await prisma.me.findFirst();
}
