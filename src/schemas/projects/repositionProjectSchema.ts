import { z } from "zod";

export const repositionProjectSchema = z.array(
  z.object({
    id: z
      .string({ error: "Id deve ser um texto válido" })
      .min(1, { error: "Id é obrigatório" }),

    title: z
      .string({ error: "Título deve ser um texto válido" })
      .min(1, { error: "Título é obrigatório" }),

    position: z
      .number({ error: "Posição deve ser um número" })
      .int({ error: "Posição deve ser um número inteiro" }),
  }),
);
