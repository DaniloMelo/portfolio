import { UpdateMe } from "@/repository/me/meRepository";
import { IUpdateMe } from "@/types/me";

export async function updateProfile(me: IUpdateMe) {
  console.log("SERVICE: ", me);
  await UpdateMe(me);
}
