import { UnauthorizedError } from "@/errors/auth/UnauthorizedError";
import { updateTechnologySchema } from "@/schemas/technology/updateTechnologySchema";
import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";
import { updateTechnologyService } from "@/services/technology/updateTechnologyService";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  context: RouteContext<"/api/technology/update/[id]">,
) {
  try {
    await getAuthenticatedUser();

    const param = await context.params;

    const body = await request.json();

    const result = updateTechnologySchema.safeParse({
      id: param.id,
      name: body.name,
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

    await updateTechnologyService(result.data);

    revalidatePath("/");

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
