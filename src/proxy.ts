import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "./libs/auth/jwt";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("access_token");

  const isApiRequest = request.nextUrl.pathname.startsWith("/api/");

  if (!token) {
    if (isApiRequest) {
      return NextResponse.json(
        {
          error: ["Não autenticado."],
        },
        { status: 401 },
      );
    }

    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    await verifyJwt(token.value);
    return NextResponse.next();
  } catch {
    if (isApiRequest) {
      return NextResponse.json(
        {
          error: ["Não autenticado."],
        },
        { status: 401 },
      );
    }

    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
