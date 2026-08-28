import { UnauthorizedError } from "@/errors/auth/UnauthorizedError";
import { updateMeSchema } from "@/schemas/me/UpdateMeSchema";
import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";
import { updateProfile } from "@/services/me/updateProfile";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    await getAuthenticatedUser();

    const body = await request.json();

    const result = updateMeSchema.safeParse(body);

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

    await updateProfile(result.data);

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
