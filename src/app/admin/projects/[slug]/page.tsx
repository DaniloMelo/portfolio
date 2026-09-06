import UpdateOrDeleteProjectForm from "@/components/UpdateOrDeleteProjectForm";
import getProject from "@/services/project/getProject";

interface EditProjectPageParams {
  params: Promise<{ slug: string }>;
}

export default async function EditProjectPage({
  params,
}: EditProjectPageParams) {
  const { slug } = await params;

  const project = await getProject(slug);
  console.log("===> ", project);
  if (!project) return;

  return (
    <main>
      <UpdateOrDeleteProjectForm project={project} />
    </main>
  );
}
