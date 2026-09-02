import { findSlugs } from "@/repository/project/findSlugs";

export async function listProjectsSlugs() {
  return await findSlugs();
}
