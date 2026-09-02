import { find } from "@/repository/me/find";

export async function getProfile() {
  const data = await find();

  if (!data) {
    throw new Error("Usuário não encontrado");
  }

  return data;
}
