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
      {/* <h1 className="text-center">Editar projeto</h1>
      <p>titulo {project?.title}</p>
      <p>sobre {project?.about}</p>

      <br />
      <p>Posiçao atual: {project?.position}</p> */}
    </main>
  );
}
