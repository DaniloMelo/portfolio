import { prisma } from "@/libs/prisma/client";
import { CredentialData } from "@/types/auth";

export async function findCredentials(): Promise<CredentialData | null> {
  const data = await prisma.me.findFirst({
    select: {
      id: true,
      email: true,

      credential: {
        select: {
          passwordHash: true,
        },
      },
    },
  });

  if (!data || !data.credential) return null;

  return {
    id: data.id,
    email: data.email,
    passwordHash: data.credential.passwordHash,
  };
}
