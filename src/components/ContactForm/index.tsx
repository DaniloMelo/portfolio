"use client";

import { useState, useRef, SubmitEvent } from "react";
import Script from "next/script";
import Input from "../Input";
import Button from "../Button";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  const [turnstileToken, setTurnstileToken] = useState("");

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setStatus("error");
    setErrorMessage("");

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"),
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setErrorMessage(result.error || "Erro ao enviar mensagem");

        setStatus("error");

        return;
      }

      setStatus("success");

      form.reset();

      if (turnstileWidgetId.current !== null) {
        // @ts-expect-error - turnstile é injetado globalmente
        window.turnstile?.reset(turnstileWidgetId.current);
      }

      setTurnstileToken("");
    } catch (error) {
      console.error("Erro no envio:", error);

      setErrorMessage("Erro de conexão. Tente novamente.");

      setStatus("error");
    }
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (!turnstileRef.current) {
            return;
          }

          // @ts-expect-error - turnstile é injetado globalmente
          turnstileWidgetId.current = window.turnstile?.render(
            turnstileRef.current,
            {
              sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,

              callback: (token: string) => {
                setTurnstileToken(token);
              },
            },
          );
        }}
      />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full lg:w-[45%]"
      >
        <p className="text-center text-sm mb-6">
          Envie uma mensagem diretamente
        </p>

        <Input
          labelText="Seu nome"
          htmlFor="name"
          id="name"
          name="name"
          type="text"
          required
        />

        <Input
          labelText="Seu e-mail"
          htmlFor="email"
          id="email"
          name="email"
          type="email"
          required
        />

        <div>
          <label htmlFor="message">Mensagem</label>

          <textarea
            className="w-full p-2 rounded-md border border-secondary-border outline-none focus-within:border-accent dark:focus-within:border-accent/40"
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={6}
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: "-9999px",
          }}
          aria-hidden="true"
        >
          <label htmlFor="website">Não preencha este campo</label>

          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="self-center my-6" ref={turnstileRef} />

        <Button
          className="w-[70%] py-3 font-bold self-center"
          disabled={status === "loading" || !turnstileToken}
        >
          {status === "loading" ? "Enviando..." : "Enviar mensagem"}
        </Button>

        {status === "success" && (
          <p className="text-center font-bold text-green-700 dark:text-green-600">
            Mensagem enviada com sucesso! Retornarei em breve.
          </p>
        )}

        {status === "error" && (
          <p className="text-center font-bold text-red-600">{errorMessage}</p>
        )}
      </form>
    </>
  );
}
