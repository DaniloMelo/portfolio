import UpdateOrDeleteTechnologyForm from "@/components/UpdateIrOrDeleteTechnologyForm";

interface EditTechnologyPageParams {
  params: Promise<{ slug: string }>;
}

export default async function EditTechnologyPage({
  params,
}: EditTechnologyPageParams) {
  const { slug } = await params;
  const techName = decodeURIComponent(slug);

  return <UpdateOrDeleteTechnologyForm name={techName} />;
}
