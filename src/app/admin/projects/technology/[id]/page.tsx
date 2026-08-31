import UpdateOrDeleteTechnologyForm from "@/components/UpdateIrOrDeleteTechnologyForm";
import { findTechnologyByIdService } from "@/services/technology/findTechnologyByIdService";

interface EditTechnologyPageParams {
  params: Promise<{ id: string }>;
}

export default async function EditTechnologyPage({
  params,
}: EditTechnologyPageParams) {
  const { id } = await params;

  const technology = await findTechnologyByIdService(id);
  if (!technology) return;

  return <UpdateOrDeleteTechnologyForm technology={technology} />;
}
