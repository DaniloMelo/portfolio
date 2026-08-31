import { sendEmail } from "@/providers/email/resend";
import { ContactFormData } from "@/schemas/contact/contactSchema";

export async function sendContactEmail(data: ContactFormData) {
  if (data.website && data.website.length > 0) {
    return;
  }

  const { error } = await sendEmail({
    name: data.name,
    email: data.email,
    message: data.message,
  });

  if (error) {
    console.error("Erro ao enviar e-mail via Resend:", error);

    throw new Error("EMAIL_SEND_FAILED");
  }
}
