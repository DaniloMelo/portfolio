import { findMe } from "@/repository/me/meRepository";
import { Me } from "@/types/me";

export async function getMe(): Promise<Me> {
  const data = await findMe();

  if (!data) {
    throw new Error("Usuário não encontrado");
  }

  return {
    name: data.name,
    jobTitle: data.jobTitle,
    introduction: data.introduction,
    about: data.about,
    contacts: data.contacts,
  };
}
