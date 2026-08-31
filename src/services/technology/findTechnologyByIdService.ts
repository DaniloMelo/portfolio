import { findTechnologyByIdRepository } from "@/repository/technology/findTechnologyByIdRepository";

export async function findTechnologyByIdService(id: string) {
  return await findTechnologyByIdRepository(id);
}
