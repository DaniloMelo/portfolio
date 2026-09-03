import { findPositions } from "@/repository/project/findPositions";

export async function getPositions() {
  return await findPositions();
}
