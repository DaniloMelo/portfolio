"use client";

import { Project } from "@/types/project";
import { useRouter } from "next/navigation";

import { SubmitEvent, useState } from "react";
import SuccessMessage from "../SuccessMessage";
import { cn } from "@/utils/cn";
import ErrorMessage from "../ErrorMessage";

interface UpdateOrDeleteProjectFormProps {
  project: Project;
}

export default function UpdateOrDeleteProjectForm({
  project,
}: UpdateOrDeleteProjectFormProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[] | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitter = event.nativeEvent.submitter as HTMLButtonElement;

    if (submitter.name === "action" && submitter.value === "delete") {
      const confirmed = window.confirm(
        `Tem certeza que deseja excluir ${project.title}?`,
      );

      if (!confirmed) {
        return;
      }

      try {
        setIsLoading(true);
        setErrors(null);

        const response = await fetch(`/api/projects/delete/${project.slug}`, {
          method: "DELETE",
        });

        const data = await response.json();

        if (!response.ok) {
          setErrors(data.error);
          return;
        }

        setMessage("Projeto Excluído...");
        setTimeout(() => {
          router.push("/admin/projects");
        }, 5000);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setErrors(null);
          setMessage(null);
          setIsLoading(false);
        }, 5000);
      }

      return;
    }

    console.log("Atualizar");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>{project.title}</p>

      {message && <SuccessMessage message={message} />}
      {errors && <ErrorMessage errors={errors} />}

      <button
        className="border cursor-pointer"
        type="submit"
        name="action"
        value="update"
      >
        Atualizar projeto
      </button>

      <section className="border-2 bg-red-500/30 dark:bg-red-500/15 border-red-500 rounded-lg p-5">
        <p className="text-xl font-bold mb-4">Deletar Projeto</p>

        <p className="mb-12">
          Cuidado! Ao deletar o projeto{" "}
          <strong className="text-lg underline">{project.title}</strong> a ação
          não poderá ser desfeita.{" "}
        </p>

        <button
          className={cn(
            "py-1 px-4 rounded-md border-2 cursor-pointer transition-transform hover:scale-105 ml-auto",
            isLoading
              ? "bg-zinc-500 border-zinc-600 dark:bg-zinc-700 dark:border-zinc-800 text-white pointer-events-none"
              : "border-red-500 bg-red-400 hover:bg-red-500 dark:bg-red-500/20 dark:hover:bg-red-700",
          )}
          type="submit"
          name="action"
          value="delete"
        >
          {isLoading ? "Excluindo..." : "Excluir"}
        </button>
      </section>
    </form>
  );
}
