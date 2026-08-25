import { UnauthorizedError } from "@/errors/auth/UnauthorizedError";
import { TechnologyNotFound } from "@/errors/project/TechnologyNotFound";
import { updateProjectSchema } from "@/schemas/projects/updateProjectSchema";
import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";
import { updateProject } from "@/services/project/updateProject";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    await getAuthenticatedUser();

    const body = await request.json();

    const result = updateProjectSchema.safeParse(body);

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

    await updateProject(result.data);

    revalidatePath("/");

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    if (error instanceof TechnologyNotFound) {
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
