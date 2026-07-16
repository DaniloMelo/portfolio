import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="pt-14">
      <div className="flex justify-center items-center gap-x-6">
        <Image
          className="rounded-full border-4 border-blue-700"
          src="https://github.com/DaniloMelo.png"
          alt="foto de perfil"
          width="200"
          height="200"
          loading="eager"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">Danilo Marques de Melo</h1>

          <p className="mb-4">Desenvolvedor full stack.</p>

          <p>Transformando idéias em realidade através do código.</p>
        </div>
      </div>
    </section>
  );
}
