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

export interface ProjectPreview {
  id: string;
  slug: string;
  title: string;
  description: string;
  repositoryCodeUrl: string;
  deployUrl: string;
  images: ProjectImage[];
}

export interface ProjectDetail {
  title: string;
  description: string;
  about: string;
  technologies: string[];
  images: ProjectImage[];
  repositoryCodeUrl: string;
  deployUrl: string;
}
