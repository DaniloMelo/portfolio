import LogoutBtn from "@/components/LogoutBtn";
import { findProjectPreviews } from "@/repository/project/projectRepository";
// import { getAuthenticatedUser } from "@/services/auth/getAuthenticatedUser";

export default async function ProjectsPage() {
  // try {
  //   await getAuthenticatedUser();
  // } catch (error) {
  //   console.log(error.message);
  // }

  const projects = await findProjectPreviews();

  return (
    <main>
      <LogoutBtn />

      {projects.map((project) => {
        return <p key={project.id}>{project.title}</p>;
      })}
    </main>
  );
}
