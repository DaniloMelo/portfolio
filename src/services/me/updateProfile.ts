import { update } from "@/repository/me/update";
import { IUpdateMe } from "@/types/me";

export async function updateProfile(me: IUpdateMe) {
  await update(me);
}
