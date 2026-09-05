import { z } from "zod";

export const updateMeSchema = z.object(
  {
    id: z
      .string({ error: "ID deve ser um texto válido." })
      .min(1, { error: "ID é obrigatório." }),

    name: z
      .string({ error: "Nome deve ser um texto válido." })
      .min(1, { error: "Nome é obrigatório." }),

    avatarUrl: z
      .url({ error: "Foto do perfil deve ser uma URL válida." })
      .min(1, { error: "Foto do perfil é obrigatória." }),

    jobTitle: z
      .string({ error: "Stack deve ser um texto válido." })
      .min(1, { error: "Stack é obrigatório." }),

    introduction: z
      .string({ error: "Introdução deve ser um texto válido." })
      .min(1, { error: "Introdução é obrigatório." }),

    about: z
      .string({ error: "Sobre deve ser um texto válido." })
      .min(1, { error: "Sobre é obrigatório." }),

    email: z
      .email({ error: "Email deve ser válido." })
      .min(1, { error: "Email é obrigatório." }),

    phone: z
      .string({ error: "Telefone deve ser um texto válido." })
      .min(1, { error: "Telefone é obrigatório." }),

    linkedInProfileUrl: z
      .url({ error: "URL de perfl do linkdin deve ser válida." })
      .min(1, { error: "URL de perfl do linkdin é obrigatória." }),

    github: z
      .url({ error: "URL do github deve ser válida." })
      .min(1, { error: "github é obrigatório." }),
  },
  {
    error: "Sua solicitação contém campos não permitidos.",
  },
);
