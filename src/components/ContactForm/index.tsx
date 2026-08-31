"use client";

import { useState, SubmitEvent } from "react";
// import Script from "next/script";
import Input from "../Input";
import Button from "../Button";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMesage] = useState("");

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"),
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
        setStatus("error");
        setErrorMessage(result.error || "Erro ao enviar mensagem");
        return;
      }

      setStatus("success");
      setSuccessMesage("Mensagem enviada com sucesso! Retornarei em breve.");

      setTimeout(() => {
        form.reset();
        setStatus("idle");
      }, 10000);
    } catch {
      setStatus("error");
      setErrorMessage("Erro de conexão. Tente novamente.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full lg:w-[45%]"
    >
      <p className="text-center text-sm mb-6">Envie uma mensagem diretamente</p>

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

      <Button
        className="w-[70%] py-3 font-bold self-center"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </Button>

      {status === "success" && (
        <p className="text-center font-bold text-green-700 dark:text-green-600">
          {successMessage}
        </p>
      )}

      {status === "error" && (
        <p className="text-center font-bold text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
