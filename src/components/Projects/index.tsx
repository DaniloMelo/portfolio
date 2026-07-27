import { projectsMock } from "@/data/projects.mocks";
import ProjectCarrousel from "../ProjectCarousel";
import Container from "../Container";
import Link from "next/link";

export default function Projects() {
  // TODO: Quando implementar o backend/banco, o repository deve trazer somente os dados necessários (getPreviewProjectData, por exemplo)
  const data = projectsMock;

  return (
    <section
      className="bg-primary-background dark:bg-primary-background"
      id="projects"
    >
      <Container>
        {data.map((project) => (
          <div className="flex" key={project.id}>
            <div className="size-64">
              <ProjectCarrousel
                images={project.images}
                key={project.id}
                variant="preview"
              />
            </div>

            <div>
              <h2>{project.title}</h2>

              <p>{project.description}</p>
            </div>

            <div>
              <Link href={`/project/${project.slug}`}>Detalhes do projeto</Link>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
