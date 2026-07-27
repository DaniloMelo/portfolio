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
  technologies: string[];
  images: ProjectImage[];
}
