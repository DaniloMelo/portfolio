import { UnauthorizedError } from "@/errors/auth/UnauthorizedError";
import { deleteProjectSchema } from "@/schemas/projects/deleteProjectSchema";
import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";
import { removeProject } from "@/services/project/removeProject";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  context: RouteContext<"/api/projects/delete/[slug]">,
) {
  try {
    await getAuthenticatedUser();

    const param = await context.params;

    const result = deleteProjectSchema.safeParse(param);

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

    await removeProject(result.data.slug);

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

    console.error("Unexpected error during delete project:", error);
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
