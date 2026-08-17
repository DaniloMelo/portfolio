import Container from "../Container";
import AdminNavLink from "../AdminNavLink";

export default function AdminNav() {
  return (
    <Container className="px-0 sm:px-0 sm:py-0 lg:px-0 lg:py-0">
      <nav className="flex justify-center gap-6 border-collapse py-2 mt-6">
        <AdminNavLink path="/admin/projects" text="Projetos" />

        <AdminNavLink path="/admin/profile" text="Perfil" />

        <AdminNavLink path="/admin/projects/new-project" text="+ Projeto" />

        <AdminNavLink
          path="/admin/projects/new-technology"
          text="+ Tecnologia"
        />
      </nav>
    </Container>
  );
}
