import { findAll } from "@/repository/technology/findAll";

export async function listTechnologies() {
  return findAll();
}
