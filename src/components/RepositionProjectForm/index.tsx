"use client";

import { SubmitEvent, useState } from "react";
import ProjectFormInput from "../ProjectFormInput";
import { ProjectsPosition } from "@/types/project";
import { cn } from "@/utils/cn";

interface RepositionProjectFormProps {
  projectsPosition: ProjectsPosition[];
}

export default function RepositionProjectForm({
  projectsPosition,
}: RepositionProjectFormProps) {
  const [positions, setPositions] =
    useState<ProjectsPosition[]>(projectsPosition);

  const handlePositionChange = (id: string, newPosition: number) => {
    setPositions((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, position: newPosition } : project,
      ),
    );
  };

  const [errors, setErrors] = useState<string[] | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/projects/reposition", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(positions),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.error);
        return;
      }

      setMessage("Os projetos foram reorganizados.");
    } catch {
      setErrors(["Erro desconhecido ao reposicionar projetos"]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setErrors(null);
        setMessage(null);
      }, 5000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 p-4 w-4xl rounded-md bg-secondary-background dark:bg-secondary-background"
    >
      {positions.map((project) => {
        return (
          <div key={project.id} className="flex flex-col mb-10 ">
            <p className="text-xl font-bold">{project.title}</p>
            <div className="w-15">
              <ProjectFormInput
                htmlFor="position"
                labelText="Posição"
                name="position"
                type="number"
                value={project.position}
                onChange={(event) =>
                  handlePositionChange(project.id, Number(event.target.value))
                }
              />
            </div>
          </div>
        );
      })}

      {errors &&
        errors.map((error, index) => {
          return (
            <p
              className="text-center text-red-900 dark:text-red-500"
              key={index}
            >
              {error}
            </p>
          );
        })}

      {message && (
        <p className="text-center text-green-900 dark:text-green-500">
          {message}
        </p>
      )}

      <button
        type="submit"
        className={cn(
          "mt-10 py-2 cursor-pointer rounded-md text-white",
          isLoading
            ? "bg-zinc-500 pointer-events-none"
            : "bg-accent hover:bg-accent/70 transition-transform hover:scale-101",
        )}
      >
        {isLoading ? "Reposicionando..." : "Reposicionar"}
      </button>
    </form>
  );
}
