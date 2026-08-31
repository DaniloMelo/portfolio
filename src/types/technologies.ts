import { ReactNode } from "react";

export type TechnologyName =
  | "HTML5"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "Node.js"
  | "tailwindcss"
  | "React"
  | "Next.js"
  | "NestJS"
  | "Docker"
  | "Jest"
  | "GitHub Actions";

export interface TechnologyInfo {
  icon: ReactNode;
}

export interface AddTechnology {
  name: string;
}

export interface UpdateTechnology {
  name: string;
  updatedName: string;
}
