"use client";

import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";

export default function LogoutBtn() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogout(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      router.push("/");
    } catch {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={handleLogout}
        className="border px-4 py-2 rounded-md cursor-pointer"
      >
        {isLoading ? "Saindo..." : "Sair"}
      </button>

      {error && <p>{error}</p>}
    </>
  );
}
