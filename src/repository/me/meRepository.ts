import { meMock } from "@/data/me.mock";
import { Me } from "@/types/me";

export async function findMe(): Promise<Me | null> {
  const data = meMock;

  return data;
}
