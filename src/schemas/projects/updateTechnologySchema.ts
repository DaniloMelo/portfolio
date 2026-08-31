import { z } from "zod";
import { addNewTechSchema } from "./addNewTechSchema";

export const updateTechnologySchema = addNewTechSchema.extend({
  updatedName: z
    .string({ error: "Nome a atualizar deve ser um texto válido." })
    .min(1, { error: "Nome a atualizar é obrigatório." }),
});
