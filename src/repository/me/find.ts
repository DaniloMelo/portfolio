import { prisma } from "@/libs/prisma/client";

export async function find() {
  return await prisma.me.findFirst();
}
