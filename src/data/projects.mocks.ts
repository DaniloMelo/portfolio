import { Project } from "@/types/project";

export const projectsMock: Project[] = [
  {
    id: "id-projeto-exemplo-1",
    slug: "slug-projeto-exemplo-1",
    title: "Título Projeto Exemplo 1",
    description: "Descrição de exemplo do projeto 1",
    about:
      "Sobre de exemplo projeto 1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam provident recusandae. Atque earum similique quae consectetur facilis tenetur vero voluptatum doloremque, eligendi, necessitatibus saepe! Vero ex repellat eveniet velit?",
    repositoryCodeUrl: "#",
    deployUrl: "#",
    technologies: ["tech-1", "tech-2", "tech-3"],
    images: [
      {
        id: "id-imagem-projeto-exemplo-1-1",
        src: "https://picsum.photos/500/700",
        alt: "Descrição de exemplo da imagem",
      },
      {
        id: "id-imagem-projeto-exemplo-1-2",
        src: "https://picsum.photos/1200/600",
        alt: "Descrição de exemplo da imagem",
      },
      {
        id: "id-imagem-projeto-exemplo-1-3",
        src: "https://picsum.photos/800/800",
        alt: "Descrição de exemplo da imagem",
      },
    ],
  },
  {
    id: "id-projeto-exemplo-2",
    slug: "slug-projeto-exemplo-2",
    title: "Título Projeto Exemplo 2",
    description:
      "Descrição de exemplo do projeto 2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam provident recusandae.",
    about:
      "Sobre de exemplo projeto 2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam provident recusandae. Atque earum similique quae consectetur facilis tenetur vero voluptatum doloremque, eligendi, necessitatibus saepe! Vero ex repellat eveniet velit?",
    repositoryCodeUrl: "#",
    deployUrl: "#",
    technologies: ["tech-1", "tech-2", "tech-3"],
    images: [
      {
        id: "id-imagem-projeto-exemplo-2-1",
        src: "https://picsum.photos/1600/900",
        alt: "Descrição de exemplo da imagem",
      },
      {
        id: "id-imagem-projeto-exemplo-2-2",
        src: "https://picsum.photos/1200/600",
        alt: "Descrição de exemplo da imagem",
      },
      {
        id: "id-imagem-projeto-exemplo-2-3",
        src: "https://picsum.photos/500/700",
        alt: "Descrição de exemplo da imagem",
      },
    ],
  },
  {
    id: "id-projeto-exemplo-3",
    slug: "slug-projeto-exemplo-3",
    title: "Título Projeto Exemplo 3",
    description:
      "Descrição de exemplo do projeto 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam provident recusandae. Atque earum similique quae consectetur facilis tenetur vero voluptatum doloremque, eligendi, necessitatibus saepe! Vero ex repellat eveniet velit?",
    about:
      "Sobre de exemplo projeto 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsam provident recusandae. Atque earum similique quae consectetur facilis tenetur vero voluptatum doloremque, eligendi, necessitatibus saepe! Vero ex repellat eveniet velit?",
    repositoryCodeUrl: "#",
    deployUrl: "#",
    technologies: ["tech-1", "tech-2", "tech-3"],
    images: [
      {
        id: "id-imagem-projeto-exemplo-3-1",
        src: "https://picsum.photos/800/800",
        alt: "Descrição de exemplo da imagem",
      },
      {
        id: "id-imagem-projeto-exemplo-3-2",
        src: "https://picsum.photos/500/700",
        alt: "Descrição de exemplo da imagem",
      },
      {
        id: "id-imagem-projeto-exemplo-3-3",
        src: "https://picsum.photos/1600/900",
        alt: "Descrição de exemplo da imagem",
      },
    ],
  },
];
