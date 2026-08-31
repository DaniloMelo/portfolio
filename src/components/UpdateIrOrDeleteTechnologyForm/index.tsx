"use client";

import { cn } from "@/utils/cn";
import { SubmitEvent, useState } from "react";
import Input from "../Input";
import { UpdateTechnology } from "@/types/technologies";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";
import { useRouter } from "next/navigation";

interface UpdateOrDeleteTechnologyFormProps {
  technology: UpdateTechnology;
}

export default function UpdateOrDeleteTechnologyForm({
  technology,
}: UpdateOrDeleteTechnologyFormProps) {
  const router = useRouter();

  const [updatedTechName, setUpdatedTechName] = useState(technology.name);

  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitter = event.nativeEvent.submitter as HTMLButtonElement;

    if (submitter.name === "action" && submitter.value === "delete") {
      const confirmed = window.confirm(
        `Tem certeza que deseja excluir ${name}?`,
      );

      if (!confirmed) {
        return;
      }

      try {
        setIsLoading(true);
        setErrors(null);

        const response = await fetch(
          `/api/projects/technologies/delete/${technology.name}`,
          {
            method: "DELETE",
          },
        );

        const data = await response.json();

        if (!response.ok) {
          setErrors(data.error);
          return;
        }

        setMessage("Tecnologia excluída com sucesso.");

        setTimeout(() => {
          router.push("/admin/projects/technology/new-technology");
        }, 5000);
      } catch (error) {
        setErrors([`Erro desconhecido ao excluir tecnologia: ${error}`]);
      } finally {
        setIsLoading(false);
        setTimeout(() => {
          setMessage(null);
          setErrors(null);
        }, 5000);
      }
      return;
    }

    try {
      setIsLoading(true);
      setErrors(null);

      const response = await fetch(`/api/technology/update/${technology.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: updatedTechName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.error);
        return;
      }

      setMessage("Tecnologia atualizada com sucesso.");

      setTimeout(() => {
        router.push("/admin/projects/technology/new-technology");
      }, 5000);
    } catch (error) {
      setErrors([`Erro desconhecido ao atualizar tecnlogia: ${error}`]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setMessage(null);
        setErrors(null);
      }, 5000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 p-4 w-full rounded-md bg-secondary-background dark:bg-secondary-background"
    >
      <Input
        labelText="Tecnologia"
        htmlFor="technology"
        name="technology"
        type="text"
        value={updatedTechName}
        onChange={(e) => setUpdatedTechName(e.target.value)}
      />

      <div className="flex flex-col items-center gap-4">
        {errors && <ErrorMessage errors={errors} />}
        {message && <SuccessMessage message={message} />}
      </div>

      <button
        className={cn(
          "mt-10 py-2 self-center min-w-[50%] cursor-pointer rounded-md text-white",
          isLoading
            ? "bg-zinc-500 pointer-events-none"
            : "bg-accent hover:bg-accent/70 font-bold transition-transform hover:scale-101",
        )}
        type="submit"
        name="action"
        value="update"
      >
        {isLoading ? "Atualizando tecnologia..." : "Atualizar tecnologia"}
      </button>

      <section className="mt-30 border-2 bg-red-500/30 dark:bg-red-500/15 border-red-500 rounded-lg p-5">
        <p className="text-xl font-bold mb-4">Deletar Tecnologia</p>

        <p className="mb-12">
          Cuidado! Ao deletar a tecnologia{" "}
          <strong className="text-lg underline">{updatedTechName}</strong> a
          ação não poderá ser desfeita.{" "}
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
