"use client";

import { SubmitEvent, useState } from "react";
import AddProjectFormInput from "../AddProjectFormInput";
import { createSlug } from "@/utils/createSlug";
import { cn } from "@/utils/cn";
import { MarkdownEditor } from "../MarkdownEditor";

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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 p-4 w-4xl rounded-md bg-secondary-background dark:bg-secondary-background"
    >
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

      {/* <AddProjectFormInput
        htmlFor="about"
        labelText="Sobre"
        name="about"
        type="text"
        value={about}
        onChange={(event) => setAbout(event.target.value)}
      /> */}

      <MarkdownEditor
        textAreaName="about"
        labelText="Sobre"
        value={about}
        setValue={setAbout}
        disabled={isLoading}
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

      <button
        onClick={addTechInput}
        type="button"
        className="cursor-pointer w-fit px-4 mt-10 rounded-md text-white bg-accent hover:bg-accent/70 transition-transform hover:scale-105"
      >
        Add Tech
      </button>

      {techNames.map((tech, index) => (
        <div className="flex items-end gap-2 mb-6" key={index}>
          <AddProjectFormInput
            labelText={`Tech ${index + 1}`}
            htmlFor={`tech-${index + 1}`}
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

          <button
            onClick={() => removeTechInput(tech)}
            type="button"
            className="cursor-pointer py-2 px-4 rounded-sm bg-red-400 hover:bg-red-600 text-white transition-transform hover:scale-105"
          >
            X
          </button>
        </div>
      ))}

      <button
        onClick={addImagesInput}
        type="button"
        className="cursor-pointer w-fit px-4 mt-10 rounded-md text-white bg-accent hover:bg-accent/70 transition-transform hover:scale-105"
      >
        Add imagem
      </button>

      {images.map((image, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-end gap-2 mb-2">
            <AddProjectFormInput
              type="url"
              labelText={`Imagem ${index + 1}`}
              htmlFor={`Imagem-${index + 1}`}
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
            <button
              onClick={() => removeImagesInput(image.src)}
              type="button"
              className="cursor-pointer py-2 px-4 rounded-sm bg-red-400 hover:bg-red-600 text-white transition-transform hover:scale-105"
            >
              X
            </button>
          </div>
          <AddProjectFormInput
            type="text"
            labelText={`Alt da Imagem ${index + 1}`}
            htmlFor={`alt-imagem-${index + 1}`}
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

      <button
        type="submit"
        className={cn(
          "mt-10 py-2 cursor-pointer rounded-md text-white",
          isLoading
            ? "bg-zinc-500 pointer-events-none"
            : "bg-accent hover:bg-accent/70 transition-transform hover:scale-101",
        )}
      >
        {isLoading ? "Adicionando..." : "Adicionar"}
      </button>
    </form>
  );
}
