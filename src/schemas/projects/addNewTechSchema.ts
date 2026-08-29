import { z } from "zod";

export const addNewTechSchema = z.object(
  {
    name: z
      .string({ error: "Nome da tecnologia deve ser um texto válido." })
      .min(1, { error: "Nome da tecnologia é obrigatório." }),
  },
  {
    error: "Sua solicitação contém campos não permitidos.",
  },
);
