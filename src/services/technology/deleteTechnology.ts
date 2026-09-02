import { deleteById } from "@/repository/technology/deleteById";

export default async function deleteTechnology(id: string) {
  await deleteById(id);
}
