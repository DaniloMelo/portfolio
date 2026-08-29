import { TechnologyInfo, TechnologyName } from "@/types/technologies";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs, SiJest, SiGithubactions } from "react-icons/si";
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
      icon: <FaHtml5 className="size-10 text-[#E34F26]" />,
    },
  ],
  [
    "CSS",
    {
      icon: <FaCss3Alt className="size-10 text-[#3366CC]" />,
    },
  ],
  [
    "JavaScript",
    {
      icon: <BsJavascript className="size-10 text-[#e3cc1d]" />,
    },
  ],
  [
    "TypeScript",
    {
      icon: <BsTypescript className="size-10 text-[#3178C6]" />,
    },
  ],
  [
    "Node.js",
    {
      icon: <FaNodeJs className="size-10 text-[#5FA04E]" />,
    },
  ],
  [
    "tailwindcss",
    {
      icon: <RiTailwindCssFill className="size-10 text-[#06B6D4]" />,
    },
  ],
  [
    "React",
    {
      icon: <FaReact className="size-10 text-[#61DAFB]" />,
    },
  ],
  [
    "Next.js",
    {
      icon: <RiNextjsFill className="size-10 text-sm" />,
    },
  ],
  [
    "NestJS",
    {
      icon: <SiNestjs className="size-10 text-[#E0234E]" />,
    },
  ],
  [
    "Docker",
    {
      icon: <FaDocker className="size-10 text-[#2496ED]" />,
    },
  ],
  [
    "Jest",
    {
      icon: <SiJest className="size-10 text-[#C21325]" />,
    },
  ],
  [
    "GitHub Actions",
    {
      icon: <SiGithubactions className="size-10 text-[#2088FF]" />,
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
      <span className="text-secondary-text dark:text-secondary-text text-sm">
        {name}
      </span>
    </div>
  );
}

// https://simpleicons.org/
