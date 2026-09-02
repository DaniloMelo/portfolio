import { updateMe } from "@/repository/me/updateMe";
import { IUpdateMe } from "@/types/me";

export async function updateProfile(me: IUpdateMe) {
  await updateMe(me);
}
