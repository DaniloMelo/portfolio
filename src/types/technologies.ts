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
  | "Docker";

export interface TechnologyInfo {
  icon: ReactNode;
}
