import { UnauthorizedError } from "@/errors/auth/UnauthorizedError";
import { TechnologyNotFound } from "@/errors/project/TechnologyNotFound";
import { projectSchema } from "@/schemas/projects/projectSchema";
import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";
import { addProject } from "@/services/project/addProject";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await getAuthenticatedUser();

    const body = await request.json();

    const result = projectSchema.safeParse(body);

    if (!result.success) {
      const errorMessagesArr = result.error.issues.map(
        (issue) => issue.message,
      );

      console.log(errorMessagesArr);

      return NextResponse.json(
        {
          error: errorMessagesArr,
        },
        { status: 400 },
      );
    }

    await addProject(result.data);

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
