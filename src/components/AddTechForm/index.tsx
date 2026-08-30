"use client";

import { SubmitEvent, useState } from "react";
import Input from "../Input";
import { cn } from "@/utils/cn";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";

export default function AddTechForm() {
  const [newTechName, setNewTechName] = useState("");

  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setIsLoading(true);

      const response = await fetch("/api/projects/technologies/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newTechName }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.error);
        return;
      }

      setMessage("Tecnologia adicionada.");
    } catch {
      setErrors(["Erro ao adicionar nova technologia"]);
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
      className="flex flex-col gap-5 p-4 min-w-[50%] rounded-md bg-secondary-background dark:bg-secondary-background"
    >
      <Input
        labelText="Nome da tecnologia"
        htmlFor="tech"
        name="tech"
        type="text"
        value={newTechName}
        onChange={(event) => setNewTechName(event.target.value)}
        required
      />

      <div className="flex flex-col items-center gap-4">
        {errors && <ErrorMessage errors={errors} />}
        {message && <SuccessMessage message={message} />}
      </div>

      <button
        type="submit"
        className={cn(
          "mt-10 py-2 self-center min-w-[50%] cursor-pointer rounded-md text-white",
          isLoading
            ? "bg-zinc-500 pointer-events-none"
            : "bg-accent hover:bg-accent/70 font-bold transition-transform hover:scale-101",
        )}
      >
        {isLoading ? "Adicionando..." : "Adicionar"}
      </button>
    </form>
  );
}
