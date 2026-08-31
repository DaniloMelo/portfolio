import { z } from "zod";

export const deleteTechnologySchema = z.object({
  id: z
    .string({ error: "ID deve ser um texto válido." })
    .min(1, { error: "ID é obrigatório." }),
});
