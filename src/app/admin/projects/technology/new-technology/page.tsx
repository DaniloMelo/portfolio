import AddTechForm from "@/components/AddTechForm";
import { listTechnologies } from "@/services/technology/listTechnologies";
import Link from "next/link";

export default async function NewTechnologyPage() {
  const techs = await listTechnologies();

  return (
    <main className="mt-10 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
      <div className="w-[45%]">
        <p className="mb-10 text-lg">Tecnologias disponíveis: </p>

        {techs.map((tech) => {
          return (
            <p key={tech.id} className="mb-5">
              <Link
                href={`/admin/projects/technology/${tech.id}`}
                className="hover:text-blue-600 hover:underline"
              >
                {tech.name}
              </Link>
            </p>
          );
        })}
      </div>

      <div className="w-[45%] mt-20 lg:mt-0">
        <p className="text-center text-lg">Adicionar nova tecnologia</p>

        <AddTechForm />
      </div>
    </main>
  );
}
