import { NextRequest } from "next/server";

export function isValidOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL;

  if (!origin) {
    return false;
  }

  return origin === allowedOrigin;
}
