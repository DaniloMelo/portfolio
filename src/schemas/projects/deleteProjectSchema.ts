import { z } from "zod";

export const deleteProjectSchema = z.object(
  {
    slug: z
      .string({ error: "Slug deve ser um texto válido." })
      .min(1, { error: "Slug é obrigatório." }),
  },
  {
    error: "Sua solicitação contém campos não permitidos.",
  },
);
