import { findMe } from "@/repository/me/meRepository";

export async function getMe() {
  const data = await findMe();

  if (!data) {
    throw new Error("Usuário não encontrado");
  }

  return data;
}
