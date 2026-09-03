import RepositionProjectForm from "@/components/RepositionProjectForm";
import { getPositions } from "@/services/project/getPositions";

export default async function ReorderProjectsPage() {
  const data = await getPositions();

  return (
    <main className="flex items-center justify-center">
      <RepositionProjectForm projectsPosition={data} />
    </main>
  );
}
