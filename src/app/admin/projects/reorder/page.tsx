import RepositionProjectForm from "@/components/RepositionProjectForm";
import { findProjectsPosition } from "@/repository/project/projectRepository";

export default async function ReorderProjectsPage() {
  const data = await findProjectsPosition();
  return (
    <main className="flex items-center justify-center">
      <RepositionProjectForm projectsPosition={data} />
    </main>
  );
}
