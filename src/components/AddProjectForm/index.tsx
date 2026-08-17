"use client";

import { SubmitEvent, useState } from "react";
import AddProjectFormInput from "../AddProjectFormInput";
import { createSlug } from "@/utils/createSlug";

export default function AddProjectForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [repositoryCodeUrl, setRepositoryCodeUrl] = useState("");
  const [deployUrl, setDeployUrl] = useState("");

  const slug = createSlug(title);

  const [techNames, setTechNames] = useState<string[]>([""]);
  const addTechInput = () => {
    setTechNames((prev) => [...prev, ""]);
  };
  const removeTechInput = (techName: string) => {
    setTechNames((prev) => prev.filter((current) => current !== techName));
  };

  const [images, setImages] = useState<{ src: string; alt: string }[]>([
    { src: "", alt: "" },
  ]);
  const addImagesInput = () => {
    setImages((prev) => [...prev, { src: "", alt: "" }]);
  };
  const removeImagesInput = (imageUrl: string) => {
    setImages((prev) => prev.filter((current) => current.src !== imageUrl));
  };

  const [errors, setErrors] = useState<string[] | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/projects/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
          title,
          description,
          about,
          repositoryCodeUrl,
          deployUrl,
          technologies: techNames.map((tech) => ({ name: tech })),
          images,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.error);
        return;
      }

      setMessage("Projeto adicionado!");
    } catch {
      setErrors(["Erro desconhecido ao adicionar projeto"]);
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        setErrors(null);
        setMessage(null);
      }, 3000);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {errors &&
        errors.map((error, index) => {
          return (
            <p className="text-center text-red-900" key={index}>
              {error}
            </p>
          );
        })}

      {message && <p className="text-center text-green-900">{message}</p>}

      <AddProjectFormInput
        htmlFor="title"
        labelText="Título"
        name="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <AddProjectFormInput
        htmlFor="slug"
        labelText="Slug"
        name="slug"
        type="text"
        value={slug}
        readOnly
      />

      <AddProjectFormInput
        htmlFor="description"
        labelText="Descrição"
        name="description"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <AddProjectFormInput
        htmlFor="about"
        labelText="Sobre"
        name="about"
        type="text"
        value={about}
        onChange={(event) => setAbout(event.target.value)}
      />

      <AddProjectFormInput
        htmlFor="repository"
        labelText="URL do código"
        name="repository"
        type="text"
        value={repositoryCodeUrl}
        onChange={(event) => setRepositoryCodeUrl(event.target.value)}
      />

      <AddProjectFormInput
        htmlFor="deploy"
        labelText="URL do deploy"
        name="deploy"
        type="text"
        value={deployUrl}
        onChange={(event) => setDeployUrl(event.target.value)}
      />

      <button onClick={addTechInput} type="button">
        + Inp
      </button>

      {techNames.map((tech, index) => (
        <div className="flex gap-2" key={index}>
          <AddProjectFormInput
            labelText={`Tech ${index}`}
            htmlFor={`tech-${index}`}
            value={tech}
            onChange={(e) => {
              const value = e.target.value;

              setTechNames((prev) => {
                const newTechs = [...prev];
                newTechs[index] = value;
                return newTechs;
              });
            }}
          />

          <button onClick={() => removeTechInput(tech)} type="button">
            X
          </button>
        </div>
      ))}

      <button onClick={addImagesInput} type="button">
        + Inp
      </button>

      {images.map((image, index) => (
        <div key={index}>
          <div className="flex gap-2">
            <AddProjectFormInput
              type="url"
              labelText={`Imagem ${index}`}
              htmlFor={`Imagem-${index}`}
              value={image.src}
              onChange={(e) => {
                const value = e.target.value;

                setImages((prev) => {
                  const newImage = [...prev];
                  newImage[index].src = value;
                  return newImage;
                });
              }}
            />
            <button onClick={() => removeImagesInput(image.src)} type="button">
              X
            </button>
          </div>
          <AddProjectFormInput
            type="text"
            labelText={`Alt da Imagem ${index}`}
            htmlFor={`alt-imagem-${index}`}
            value={image.alt}
            onChange={(e) => {
              const value = e.target.value;

              setImages((prev) => {
                const newImage = [...prev];
                newImage[index].alt = value;
                return newImage;
              });
            }}
          />
        </div>
      ))}

      <button type="submit">{isLoading ? "Enviando..." : "Enviar"}</button>
    </form>
  );
}
