import { z } from "zod";
import { projectSchema } from "./projectSchema";

export const updateProjectSchema = projectSchema.extend({
  id: z
    .string({ error: "ID deve ser um texto válido." })
    .min(1, { error: "ID é obrigatório." }),

  position: z
    .number({ error: "Posição deve ser um número" })
    .int({ error: "Posição deve ser um número inteiro" })
    .min(1, { error: "Posição é obrigatório." }),
});
