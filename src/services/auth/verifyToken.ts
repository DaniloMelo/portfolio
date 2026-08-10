import { JwtPayload } from "@/types/auth";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function verifyToken(token: string): Promise<JwtPayload> {
  const { payload } = await jwtVerify(token, secret);

  if (!payload.sub) {
    throw new Error("JWT inválido.");
  }

  return {
    sub: payload.sub,
  };
}
