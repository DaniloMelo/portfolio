import { UnauthorizedError } from "@/errors/auth/UnauthorizedError";
import { deleteTechnologySchema } from "@/schemas/technology/deleteTechnologySchema";
import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";
import deleteTechnologyService from "@/services/technology/deleteTechnologyService";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  context: RouteContext<"/api/technology/delete/[id]">,
) {
  try {
    await getAuthenticatedUser();

    const param = await context.params;

    const result = deleteTechnologySchema.safeParse({
      id: param.id,
    });

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

    await deleteTechnologyService(result.data.id);

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

    console.error("Unexpected error during delete technology :", error);
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
