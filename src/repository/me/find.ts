import { prisma } from "@/libs/prisma/client";
import { Me } from "@/types/me";

export async function find(): Promise<Me | null> {
  const me = await prisma.me.findFirst();

  if (!me) {
    return null;
  }

  return me;
}
