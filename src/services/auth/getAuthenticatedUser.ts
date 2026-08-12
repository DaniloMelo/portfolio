import { UnauthorizedError } from "@/errors/auth/UnauthorizedError";
import { verifyJwt } from "@/libs/auth/jwt";
import { getMeById } from "@/repository/me/meRepository";
import { cookies } from "next/headers";

export async function getAuthenticatedUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    throw new UnauthorizedError();
  }

  const { sub } = await verifyJwt(token);

  const me = await getMeById(sub);

  if (!me) {
    throw new UnauthorizedError();
  }

  return me;
}
