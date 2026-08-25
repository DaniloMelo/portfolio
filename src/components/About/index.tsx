import RenderMarkdown from "../RenderMarkdown";

interface AboutProps {
  about: string;
}

export default function About({ about }: AboutProps) {
  return (
    <section className="h-200 bg-green-950" id="about">
      <RenderMarkdown markdown={about} />
    </section>
  );
}
