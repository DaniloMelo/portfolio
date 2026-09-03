"use client";

import { UpdateProject } from "@/types/project";
import { useRouter } from "next/navigation";
import { SubmitEvent, useState } from "react";
import SuccessMessage from "../SuccessMessage";
import { cn } from "@/utils/cn";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import { MarkdownEditor } from "../MarkdownEditor";

interface UpdateOrDeleteProjectFormProps {
  project: UpdateProject;
}

export default function UpdateOrDeleteProjectForm({
  project,
}: UpdateOrDeleteProjectFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [about, setAbout] = useState(project.about);
  const [repositoryCodeUrl, setRepositoryCodeUrl] = useState(
    project.repositoryCodeUrl,
  );
  const [deployUrl, setDeployUrl] = useState(project.deployUrl);

  const [techNames, setTechNames] = useState<string[]>(
    project.technologies.map((tech) => tech.name),
  );
  const addTechInput = () => {
    setTechNames((prev) => [...prev, ""]);
  };
  const removeTechInput = (techName: string) => {
    setTechNames((prev) => prev.filter((current) => current !== techName));
  };

  const [images, setImages] = useState<{ src: string; alt: string }[]>(
    project.images.map((image) => ({ src: image.src, alt: image.alt })),
  );
  const addImagesInput = () => {
    setImages((prev) => [...prev, { src: "", alt: "" }]);
  };
  const removeImagesInput = (imageUrl: string) => {
    setImages((prev) => prev.filter((current) => current.src !== imageUrl));
  };

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

        const response = await fetch(`/api/projects/delete/${project.id}`, {
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
      } catch {
        setErrors(["Erro desconhecido ao excluir o projeto."]);
      } finally {
        setIsLoading(false);

        setTimeout(() => {
          setErrors(null);
          setMessage(null);
        }, 5000);
      }

      return;
    }

    try {
      setIsLoading(true);
      setErrors(null);

      const response = await fetch(`/api/projects/update/${project.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: project.slug,
          title,
          description,
          about,
          repositoryCodeUrl,
          deployUrl,
          position: project.position,
          technologies: techNames.map((tech) => ({ name: tech })),
          images,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.error);
        return;
      }

      setMessage("Projeto Atualizado...");
      setTimeout(() => {
        router.push("/admin/projects");
      }, 5000);
    } catch {
      setErrors(["Erro desconhecido ao atualizar o projeto"]);
    } finally {
      setIsLoading(false);

      setTimeout(() => {
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
        htmlFor="title"
        labelText="Título"
        name="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        htmlFor="description"
        labelText="Descrição"
        name="description"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <MarkdownEditor
        textAreaName="about"
        labelText="Sobre"
        value={about}
        onChange={(value) => setAbout(value)}
        disabled={isLoading}
      />

      <Input
        htmlFor="repository"
        labelText="URL do código"
        name="repository"
        type="text"
        value={repositoryCodeUrl}
        onChange={(event) => setRepositoryCodeUrl(event.target.value)}
      />

      <Input
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
        className="cursor-pointer w-fit py-1 px-4 mt-10 rounded-md text-white bg-accent hover:bg-accent/70 transition-transform hover:scale-105"
      >
        Add Tech
      </button>

      {techNames.map((tech, index) => (
        <div className="flex items-end gap-2 mb-6" key={index}>
          <Input
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
        className="cursor-pointer w-fit py-1 px-4 mt-10 rounded-md text-white bg-accent hover:bg-accent/70 transition-transform hover:scale-105"
      >
        Add imagem
      </button>

      {images.map((image, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-end gap-2 mb-2">
            <Input
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
          <Input
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
        {isLoading ? "Atualizando projeto..." : "Atualizar projeto"}
      </button>

      <section className="mt-30 border-2 bg-red-500/30 dark:bg-red-500/15 border-red-500 rounded-lg p-5">
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
