export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  // about: string;
  // technologies: string[];
  // previewImages: ProjectImage[];
  images: ProjectImage[];
}
