import slugify from "slugify";

export function createSlug(text: string) {
  const slug = slugify(text, {
    replacement: "-",
    strict: true,
    lower: true,
    trim: true,
  });

  return slug;
}
