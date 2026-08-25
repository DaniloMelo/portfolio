"use client";

import { IUpdateMe } from "@/types/me";
import { SubmitEvent, useState } from "react";
import Input from "../Input";
import { MarkdownEditor } from "../MarkdownEditor";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";
import { cn } from "@/utils/cn";

interface UpdateProfileFormProps {
  meData: IUpdateMe;
}

export default function UpdateProfileForm({ meData }: UpdateProfileFormProps) {
  const [me, setMe] = useState(meData);

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[] | null>(null);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch("/api/me/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(me),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.error);
        return;
      }

      setMessage("Perfil atualizado");
    } catch {
      setErrors(["Erro desconhecido ao atualizar o perfil"]);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setErrors(null);
        setMessage(null);
      }, 5000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 p-4 w-full rounded-md bg-secondary-background dark:bg-secondary-background"
    >
      <Input
        htmlFor="userName"
        labelText="Nome"
        name="userName"
        type="text"
        value={me.name}
        onChange={(e) => setMe((prev) => ({ ...prev, name: e.target.value }))}
      />

      <Input
        htmlFor="avatarUrl"
        labelText="Foto (url)"
        name="avatarUrl"
        type="url"
        value={me.avatarUrl}
        onChange={(e) =>
          setMe((prev) => ({ ...prev, avatarUrl: e.target.value }))
        }
      />

      <Input
        htmlFor="jobTitle"
        labelText="Stack"
        name="jobTitle"
        type="text"
        value={me.jobTitle}
        onChange={(e) =>
          setMe((prev) => ({ ...prev, jobTitle: e.target.value }))
        }
      />

      <Input
        htmlFor="introduction"
        labelText="Introdução"
        name="introduction"
        type="text"
        value={me.introduction}
        onChange={(e) =>
          setMe((prev) => ({ ...prev, introduction: e.target.value }))
        }
      />

      <MarkdownEditor
        textAreaName="about"
        labelText="Sobre"
        value={me.about}
        onChange={(value) =>
          setMe((prev) => ({
            ...prev,
            about: value,
          }))
        }
        disabled={isLoading}
      />

      <Input
        htmlFor="email"
        labelText="E-mail"
        name="email"
        type="text"
        value={me.email}
        onChange={(e) => setMe((prev) => ({ ...prev, email: e.target.value }))}
      />

      <Input
        htmlFor="phone"
        labelText="Telefone"
        name="phone"
        type="text"
        value={me.phone}
        onChange={(e) => setMe((prev) => ({ ...prev, phone: e.target.value }))}
      />

      <Input
        htmlFor="linkedInProfileUrl"
        labelText="LinkdIn URL"
        name="linkedInProfileUrl"
        type="url"
        value={me.linkedInProfileUrl}
        onChange={(e) =>
          setMe((prev) => ({ ...prev, linkedInProfileUrl: e.target.value }))
        }
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
        {isLoading ? "Atualizando..." : "Atualizar"}
      </button>
    </form>
  );
}

/*
  about: string;
*/
