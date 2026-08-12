import { AuthenticationError } from "@/errors/auth/AuthenticationError";
import { InvalidCredentialsError } from "@/errors/auth/InvalidCredentialsError";
import { loginSchema } from "@/schemas/auth/loginSchema";
import { login } from "@/services/auth/login";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = loginSchema.safeParse(body);

    if (!result.success) {
      const errorMessagesArr = result.error.issues.map(
        (issue) => issue.message,
      );

      return NextResponse.json(
        {
          error: errorMessagesArr,
        },
        { status: 400 },
      );
    }

    const { accessToken } = await login(result.data);

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set({
      name: "access_token",
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    if (error instanceof AuthenticationError) {
      return NextResponse.json(
        {
          error: [error.message],
        },
        {
          status: 404,
        },
      );
    }

    if (error instanceof InvalidCredentialsError) {
      return NextResponse.json(
        {
          error: [error.message],
        },
        {
          status: 401,
        },
      );
    }

    console.error("Unexpected error during login:", error);
    return NextResponse.json(
      {
        error: ["Internal Server Error"],
      },
      {
        status: 500,
      },
    );
  }
}
