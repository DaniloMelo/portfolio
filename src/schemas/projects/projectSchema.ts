import { z } from "zod";

export const projectTechnologiesSchema = z.object(
  {
    name: z
      .string({ error: "Nome da tecnologia deve ser um texto válido." })
      .min(1, { error: "Nome da tecnologia é obrigatório." }),
  },
  {
    error: "Sua solicitação contém campos não permitidos.",
  },
);

export const projectImagesSchema = z.object(
  {
    src: z
      .url({ error: "src da imagem deve ser uma URL válida." })
      .min(1, { error: "src da imagem é obrigatório." }),

    alt: z
      .string({ error: "alt da imagem deve ser um texto válido." })
      .min(1, { error: "alt da imagem é obrigatório." }),
  },
  {
    error: "Sua solicitação contém campos não permitidos.",
  },
);

export const projectSchema = z.object(
  {
    slug: z
      .string({ error: "Slug deve ser um texto válido." })
      .min(1, { error: "Slug é obrigatório." }),

    title: z
      .string({ error: "Título deve ser um texto válido." })
      .min(1, { error: "Título é obrigatório." }),

    description: z
      .string({ error: "Descrição deve ser um texto válido." })
      .min(1, { error: "Descrição é obrigatório." }),

    about: z
      .string({ error: "Sobre deve ser um texto válido." })
      .min(1, { error: "Sobre é obrigatório." }),

    repositoryCodeUrl: z
      .string({ error: "URL do repositório deve ser um texto válido." })
      .min(1, { error: "URL do repositório é obrigatório." }),

    deployUrl: z
      .string({ error: "URL do deploy deve ser um texto válido." })
      .min(1, { error: "URL do deploy é obrigatório." }),

    technologies: z.array(projectTechnologiesSchema),

    images: z.array(projectImagesSchema),
  },
  {
    error: "Sua solicitação contém campos não permitidos.",
  },
);
