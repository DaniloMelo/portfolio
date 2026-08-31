import { findTechnologiesRepository } from "@/repository/technology/findTechnologiesRepository";

export async function findTechnologiesService() {
  return findTechnologiesRepository();
}
