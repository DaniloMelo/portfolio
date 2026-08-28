import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nome muito curto")
    .max(100, "Nome muito longo"),

  email: z.string().trim().email("E-mail inválido").max(200),

  message: z
    .string()
    .trim()
    .min(10, "Mensagem muito curta")
    .max(2000, "Mensagem muito longa"),

  website: z.string().max(0, "Spam detectado").optional().or(z.literal("")),

  turnstileToken: z.string().min(1, "Verificação de segurança obrigatória"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
