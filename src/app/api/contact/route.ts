import { InvalidCaptchaError } from "@/errors/contact/InvalidCaptchaError";
import { getClientIp } from "@/libs/http/getClientIp";
import { isValidOrigin } from "@/libs/security/validateOrigin";
import { ratelimit } from "@/providers/rateLimit/reateLimit";
import { contactSchema } from "@/schemas/contact/contactSchema";
import { sendContactEmail } from "@/services/contact/sendContactEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    if (!isValidOrigin(request)) {
      return NextResponse.json(
        {
          error: "Origem não autorizada",
        },
        {
          status: 403,
        },
      );
    }

    const ip = getClientIp(request);

    const { success, remaining, reset } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        {
          error:
            "Atingiu o número máximo de tentativas para envio de e-mail. Tente novamente mais tarde.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": remaining.toString(),

            "X-RateLimit-Reset": reset.toString(),
          },
        },
      );
    }

    const body = await request.json();

    const result = contactSchema.safeParse(body);

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

    await sendContactEmail(result.data);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    if (error instanceof InvalidCaptchaError) {
      return NextResponse.json(
        {
          error: "Falha na verificação de segurança",
        },
        { status: 403 },
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
