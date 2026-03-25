import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useLang } from "../../context/LangContext";
import { ScrollReveal } from "../shared/ScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const galleryImages = [
  { src: "/images/gallery.jpeg", alt: "Rex Hand Wash detail work" },
  {
    src: "https://images.unsplash.com/photo-1694678505383-676d78ea3b96?w=1080&q=80",
    alt: "Hand car wash soap foam",
  },
  {
    src: "https://images.unsplash.com/photo-1761312834150-4beefff097a7?w=1080&q=80",
    alt: "Luxury car wash detailing",
  },
  {
    src: "https://images.unsplash.com/photo-1661963587573-d1b3b9ba3233?w=1080&q=80",
    alt: "Clean car interior detail",
  },
  {
    src: "https://images.unsplash.com/photo-1696581084306-591db2e1af14?w=1080&q=80",
    alt: "Red Ferrari sports car",
  },
  {
    src: "https://images.unsplash.com/photo-1569587450258-b77aec010b41?w=1080&q=80",
    alt: "Car polishing buffer machine",
  },
  {
    src: "https://images.unsplash.com/photo-1649969193118-827078f973e5?w=1080&q=80",
    alt: "Ceramic coating shine",
  },
  {
    src: "https://images.unsplash.com/photo-1609364818743-0b015aa0e620?w=1080&q=80",
    alt: "Black Porsche detailed",
  },
  {
    src: "https://images.unsplash.com/photo-1582976441946-dace8c878bd4?w=1080&q=80",
    alt: "Silver Mercedes clean",
  },
  {
    src: "https://images.unsplash.com/photo-1677793923569-fbb29044259e?w=1080&q=80",
    alt: "White Bentley luxury car",
  },
];

export function GallerySection() {
  const { lang } = useLang();
  const isEn = lang === "en";

  const autoplayPlugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  return (
    <section className="py-16 md:py-24 bg-rex-blue overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-12">
        <ScrollReveal direction="up">
          <h2
            className="text-center text-white font-bangers tracking-[2px]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            {isEn ? "Our Work Speaks for Itself" : "Nuestro Trabajo Habla por Sí Solo"}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((img, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <div className="rounded-xl overflow-hidden shadow-lg aspect-square">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation buttons offset inward so they don't clip */}
            <CarouselPrevious className="left-2 bg-white/20 border-white/30 text-white hover:bg-white/40 hover:text-white" />
            <CarouselNext className="right-2 bg-white/20 border-white/30 text-white hover:bg-white/40 hover:text-white" />
          </Carousel>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.25}>
          <div className="flex justify-center">
            <a
              href="tel:8138256513"
              className="bg-rex-red hover:bg-[#c1303b] text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_8px_30px_rgba(230,57,70,0.4)] font-bangers text-[22px] tracking-[1px]"
            >
              {isEn ? "Book Your Detail Today" : "Reserva Tu Detallado Hoy"}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
