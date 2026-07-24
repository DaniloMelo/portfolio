"use client";

import { ProjectImage } from "@/types/project";
import { cn } from "@/utils/cn";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface ProjectCarrouselProps {
  images: ProjectImage[];
  autoplay?: boolean;
}

export default function ProjectCarrousel({
  images,
  autoplay = false,
}: ProjectCarrouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    autoplay
      ? [
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]
      : [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {images.map((image) => (
            <div key={image.src} className="min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Imagem anterior"
            className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            <LuChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Próxima imagem"
            className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
          >
            <LuChevronRight size={22} />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ir para imagem ${index + 1}`}
              aria-current={selectedIndex === index}
              className={cn(
                "h-2 rounded-full transition-all",
                selectedIndex === index
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
