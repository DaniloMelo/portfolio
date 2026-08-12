import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "./libs/auth/jwt";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("access_token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    await verifyJwt(token.value);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
