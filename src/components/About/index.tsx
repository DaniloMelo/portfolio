interface AboutProps {
  about: string;
}

export default function About({ about }: AboutProps) {
  return (
    <section className="h-200 bg-green-950" id="about">
      {about}
    </section>
  );
}
