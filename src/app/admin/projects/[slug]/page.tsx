import UpdateOrDeleteProjectForm from "@/components/UpdateOrDeleteProjectForm";
import { findBySlug } from "@/repository/project/findBySlug";

interface EditProjectPageParams {
  params: Promise<{ slug: string }>;
}

export default async function EditProjectPage({
  params,
}: EditProjectPageParams) {
  const { slug } = await params;

  // TODO: Alterar para service
  const project = await findBySlug(slug);
  if (!project) return;

  return (
    <main>
      <UpdateOrDeleteProjectForm id={project.id} project={project} />
    </main>
  );
}
