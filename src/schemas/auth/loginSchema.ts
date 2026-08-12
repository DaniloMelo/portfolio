import { LoginInput } from "@/types/auth";
import { z } from "zod";

export const loginSchema = z.strictObject(
  {
    email: z.email({ error: "Email deve ser um texto válido." }),

    password: z
      .string({ error: "Senha deve ser um texto válido." })
      .min(1, { error: "Senha é obrigatória." }),
  },
  {
    error: "Sua solicitação contém campos não permitidos.",
  },
) satisfies z.ZodType<LoginInput>;

// export type LoginInputZodType = z.infer<typeof loginSchema>;
