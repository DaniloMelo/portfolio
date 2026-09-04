export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectTechnology {
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  about: string;
  repositoryCodeUrl: string;
  deployUrl: string;
  position: number;
  technologies: ProjectTechnology[];
  images: ProjectImage[];
  testUser?: string | null;
  testEmail?: string | null;
  testPassword?: string | null;
}

export interface StoredProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  about: string;
  repositoryCodeUrl: string;
  deployUrl: string;
  position: number;
  technologies: ProjectTechnology[];
  images: ProjectImage[];
  testUser: string | null;
  testEmail: string | null;
  testPassword: string | null;
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
  testUser: string | null;
  testEmail: string | null;
  testPassword: string | null;
}

export interface ProjectsPosition {
  id: string;
  title: string;
  position: number;
}

export interface UpdateProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  about: string;
  repositoryCodeUrl: string;
  deployUrl: string;
  position: number;
  technologies: ProjectTechnology[];
  images: ProjectImage[];
  testUser?: string | null;
  testEmail?: string | null;
  testPassword?: string | null;
}
