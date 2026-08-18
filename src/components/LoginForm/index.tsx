"use client";

import { SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrors(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.error);
        return;
      }

      router.push("/admin/projects");
      // router.refresh();
    } catch {
      setErrors(["Erro desconhecido ao fazer o login"]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        p-4 rounded-xl flex flex-col max-w-120 mx-auto
        bg-secondary-background dark:bg-secondary-background
        shadow-xl 
      "
    >
      <div className="flex flex-col mb-6">
        <label htmlFor="email">Email</label>
        <input
          className="
            h-12 text-xl md:h-10 px-2 py-2 rounded-md 
            border border-secondary-border outline-none focus-within:border-accent dark:focus-within:border-accent/40
          "
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="password">Senha</label>
        <input
          className="
            h-12 text-xl md:h-10 px-2 py-2 rounded-md 
            border border-secondary-border outline-none focus-within:border-accent dark:focus-within:border-accent/40
          "
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      {errors &&
        errors.map((error, index) => {
          return (
            <p className="text-center text-red-900" key={index}>
              {error}
            </p>
          );
        })}

      <button
        className={cn(
          "py-2 mt-5 text-xl rounded-md cursor-pointer text-white",
          isLoading
            ? "bg-zinc-500 cursor-progress"
            : "bg-accent dark:bg-accent/40",
        )}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
