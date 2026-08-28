import RenderMarkdown from "../RenderMarkdown";

interface AboutProps {
  about: string;
}

export default function About({ about }: AboutProps) {
  return (
    <section className="p-10 pb-50" id="about">
      <RenderMarkdown markdown={about} />
    </section>
  );
}
