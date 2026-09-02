import { UnauthorizedError } from "@/errors/auth/UnauthorizedError";
import { addNewTechSchema } from "@/schemas/technology/addNewTechSchema";
import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";
import { createTechnology } from "@/services/technology/createTechnology";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await getAuthenticatedUser();

    const body = await request.json();

    const result = addNewTechSchema.safeParse(body);

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

    await createTechnology(result.data);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json(
        {
          error: [error.message],
        },
        {
          status: 401,
        },
      );
    }

    console.error("Unexpected error during project creation:", error);
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
