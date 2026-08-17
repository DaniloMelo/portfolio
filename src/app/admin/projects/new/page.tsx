import AddProjectForm from "@/components/AddProjectForm";
import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";
import { redirect } from "next/navigation";

export default async function TestePage() {
  try {
    await getAuthenticatedUser();
  } catch {
    redirect("/login");
  }

  return <AddProjectForm />;
}
