import UpdateOrDeleteTechnologyForm from "@/components/UpdateIrOrDeleteTechnologyForm";
import { getTechnology } from "@/services/technology/getTechnology";

interface EditTechnologyPageParams {
  params: Promise<{ id: string }>;
}

export default async function EditTechnologyPage({
  params,
}: EditTechnologyPageParams) {
  const { id } = await params;

  const technology = await getTechnology(id);
  if (!technology) return;

  return <UpdateOrDeleteTechnologyForm technology={technology} />;
}
