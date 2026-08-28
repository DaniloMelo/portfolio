import { escapeHtml } from "@/libs/html/escapeHtml";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendContactEmailInput {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({
  name,
  email,
  message,
}: SendContactEmailInput) {
  return resend.emails.send({
    from: process.env.CONTACT_EMAIL_FROM!,
    to: process.env.CONTACT_EMAIL_TO!,
    replyTo: email,

    subject: `Novo contato do portfólio: ${name}`,

    text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,

    html: `
      <div>
        <p>
          <strong>Nome:</strong>
          ${escapeHtml(name)}
        </p>

        <p>
          <strong>E-mail:</strong>
          ${escapeHtml(email)}
        </p>

        <p>
          <strong>Mensagem:</strong>
        </p>

        <p>
          ${escapeHtml(message).replace(/\n/g, "<br>")}
        </p>
      </div>
    `,
  });
}
