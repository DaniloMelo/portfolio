import { UnauthorizedError } from "@/errors/auth/UnauthorizedError";
import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";
import { NextResponse } from "next/server";

// Exemplo de uso para rotas protegidas
export async function GET() {
  try {
    const me = await getAuthenticatedUser();

    return NextResponse.json({
      authenticated: true,
      user: {
        id: me.id,
        name: me.name,
      },
    });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json(
        {
          message: [error.message],
        },
        {
          status: 401,
        },
      );
    }
  }
}
