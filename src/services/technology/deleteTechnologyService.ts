import { deleteTechnologyRepository } from "@/repository/technology/deleteTechnologyRepository";

export default async function deleteTechnologyService(id: string) {
  await deleteTechnologyRepository(id);
}
