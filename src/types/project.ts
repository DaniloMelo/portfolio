export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  about: string;
  repositoryCodeUrl: string;
  deployUrl: string;
  technologies: string[];
  images: ProjectImage[];
}
