import { projectsMock } from "@/data/projects.mocks";
import ProjectCarrousel from "../ProjectCarousel";
import Container from "../Container";

export default function Projects() {
  return (
    <section
      className="bg-primary-background dark:bg-primary-background"
      id="projects"
    >
      <Container>
        {projectsMock.map((project) => (
          <div className="flex" key={project.slug}>
            <div className="size-64">
              <ProjectCarrousel images={project.images} key={project.slug} />
            </div>

            <div>
              <h2>{project.title}</h2>

              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
