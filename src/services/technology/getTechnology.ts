import { findById } from "@/repository/technology/findById";

export async function getTechnology(id: string) {
  return await findById(id);
}
