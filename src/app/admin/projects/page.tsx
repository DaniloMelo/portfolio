import { findProjectPreviews } from "@/repository/project/projectRepository";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await findProjectPreviews();

  return (
    <main className="flex flex-col">
      {projects.map((project) => {
        return (
          <Link href={`/admin/projects/${project.slug}`} key={project.id}>
            {project.title}
          </Link>
        );
      })}
    </main>
  );
}
