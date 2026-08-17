import { findProjectPreviews } from "@/repository/project/projectRepository";

export default async function ProjectsPage() {
  const projects = await findProjectPreviews();

  return (
    <main>
      {projects.map((project) => {
        return <p key={project.id}>{project.title}</p>;
      })}
    </main>
  );
}
