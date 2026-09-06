import { listProjectTitlesAndSlugs } from "@/services/project/listProjectTitltesAndSlugs";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await listProjectTitlesAndSlugs();

  return (
    <main className="flex flex-col gap-10 p-10">
      {projects.map((project) => {
        return (
          <div className="text-xl font-bold" key={project.id}>
            <Link
              className="hover:text-accent"
              href={`/admin/projects/${project.slug}`}
              key={project.id}
            >
              {project.title}
            </Link>
          </div>
        );
      })}
    </main>
  );
}
