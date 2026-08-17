import AdminHeader from "@/components/AdminHeader";
import AdminNav from "@/components/AdminNav";
import Container from "@/components/Container";
import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {
    await getAuthenticatedUser();
  } catch {
    redirect("/login");
  }

  return (
    <>
      <AdminHeader />

      <AdminNav />

      <Container>{children}</Container>
    </>
  );
}
