import { z } from "zod";

import { addNewTechSchema } from "./addNewTechSchema";
export const updateTechnologySchema = addNewTechSchema.extend({
  id: z
    .string({ error: "ID deve ser um texto válido." })
    .min(1, { error: "ID é obrigatório." }),
});
