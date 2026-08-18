export interface ProjectImage {
  // id: string;
  src: string;
  alt: string;
}

export interface ProjectTechnology {
  // id?: string;
  // id: string;
  name: string;
}

export interface Project {
  // id?: string;
  // id: string;
  slug: string;
  title: string;
  description: string;
  about: string;
  repositoryCodeUrl: string;
  deployUrl: string;
  technologies: ProjectTechnology[];
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
  technologies: ProjectTechnology[];
  images: ProjectImage[];
  repositoryCodeUrl: string;
  deployUrl: string;
}
