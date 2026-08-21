import { UnauthorizedError } from "@/errors/auth/UnauthorizedError";
import { RepositionProjectError } from "@/errors/project/RepositionProjectError";
import { repositionProjectSchema } from "@/schemas/projects/repositionProjectSchema";
import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";
import { changeProjectsPosition } from "@/services/project/changeProjectsPosition";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await getAuthenticatedUser();

    const body = await request.json();

    const result = repositionProjectSchema.safeParse(body);

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

    await changeProjectsPosition(result.data);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    if (error instanceof RepositionProjectError) {
      return NextResponse.json(
        {
          error: [error.message],
        },
        {
          status: 400,
        },
      );
    }

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
