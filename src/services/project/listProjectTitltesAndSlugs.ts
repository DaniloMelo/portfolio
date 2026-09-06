import { findTitlesAndSlugs } from "@/repository/project/findTitlesAndSlugs";

export async function listProjectTitlesAndSlugs() {
  return await findTitlesAndSlugs();
}
