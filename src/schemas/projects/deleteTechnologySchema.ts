import { z } from "zod";

export const deleteTechnologySchema = z.object(
  {
    name: z
      .string({ error: "Name deve ser um texto válido." })
      .min(1, { error: "Name é obrigatório." }),
  },
  {
    error: "Sua solicitação contém campos não permitidos.",
  },
);
