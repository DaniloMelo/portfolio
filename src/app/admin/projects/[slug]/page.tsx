import UpdateOrDeleteProjectForm from "@/components/UpdateOrDeleteProjectForm";
import { findProjectBySlug } from "@/repository/project/projectRepository";

interface EditProjectPageParams {
  params: Promise<{ slug: string }>;
}

export default async function EditProjectPage({
  params,
}: EditProjectPageParams) {
  const { slug } = await params;

  const project = await findProjectBySlug(slug);
  if (!project) return;

  return (
    <main>
      <UpdateOrDeleteProjectForm project={project} />
    </main>
  );
}
