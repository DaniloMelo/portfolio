import { TechnologyInfo, TechnologyName } from "@/types/technologies";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

const technologiesMap = new Map<TechnologyName, TechnologyInfo>([
  [
    "HTML5",
    {
      icon: (
        <FaHtml5 className="size-12 text-[#E34F26] transition-transform hover:scale-110" />
      ),
    },
  ],
  [
    "CSS",
    {
      icon: (
        <FaCss3Alt className="size-12 text-[#3366CC] transition-transform hover:scale-110" />
      ),
    },
  ],
  [
    "JavaScript",
    {
      icon: (
        <BsJavascript className="size-12 text-[#e3cc1d] transition-transform hover:scale-110" />
      ),
    },
  ],
  [
    "TypeScript",
    {
      icon: (
        <BsTypescript className="size-12 text-[#3178C6] transition-transform hover:scale-110" />
      ),
    },
  ],
  [
    "Node.js",
    {
      icon: (
        <FaNodeJs className="size-12 text-[#5FA04E] transition-transform hover:scale-110" />
      ),
    },
  ],
  [
    "tailwindcss",
    {
      icon: (
        <RiTailwindCssFill className="size-12 text-[#06B6D4] transition-transform hover:scale-110" />
      ),
    },
  ],
  [
    "React",
    {
      icon: (
        <FaReact className="size-12 text-[#61DAFB] transition-transform hover:scale-110" />
      ),
    },
  ],
  [
    "Next.js",
    {
      icon: (
        <RiNextjsFill className="size-12 transition-transform hover:scale-110" />
      ),
    },
  ],
  [
    "NestJS",
    {
      icon: (
        <SiNestjs className="size-12 text-[#E0234E] transition-transform hover:scale-110" />
      ),
    },
  ],
  [
    "Docker",
    {
      icon: (
        <FaDocker className="size-12 text-[#2496ED] transition-transform hover:scale-110" />
      ),
    },
  ],
]);

interface TechnologyProps {
  name: TechnologyName;
}

export default function Technology({ name }: TechnologyProps) {
  const tech = technologiesMap.get(name);

  return (
    <div
      className="
        flex flex-col justify-center items-center gap-1 p-2
        border border-secondary-border rounded-md shadow-md
        dark:border-primary-border dark:shadow-none dark:bg-secondary-background
      "
    >
      {tech?.icon}
      <span className="text-secondary-text dark:text-secondary-text">
        {name}
      </span>
    </div>
  );
}
