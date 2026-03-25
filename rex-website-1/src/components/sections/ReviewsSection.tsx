import { Star } from "lucide-react";
import { useLang } from "../../context/LangContext";
import { ScrollReveal } from "../shared/ScrollReveal";
import { ImageWithFallback } from "../shared/ImageWithFallback";

const reviewImages = [
  { src: "/images/review1.jpeg", alt: "Customer car — Ana María Martínez C." },
  { src: "/images/review2.jpeg", alt: "Customer car — Rodrigo Roa" },
  { src: "/images/review3.jpeg", alt: "Customer car — ATA Digital" },
  { src: "/images/review4.jpeg", alt: "Customer car — Alberto Calderon" },
];

export function ReviewsSection() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <section id="reviews" className="py-16 md:py-24 bg-rex-blue">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-12 items-center">
        <ScrollReveal direction="up">
          <div className="text-center flex flex-col gap-4 items-center">
            <h2
              className="text-white font-bangers tracking-[2px]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              {isEn
                ? "5-Star Rated by Tampa Customers"
                : "5 Estrellas por Clientes de Tampa"}
            </h2>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-rex-amber fill-rex-amber" />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {reviewImages.map((img, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="aspect-[9/16] overflow-hidden">
                  <ImageWithFallback
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.2} className="w-full flex justify-center">
          <a
            href="tel:8138256513"
            className="inline-block text-center bg-rex-red hover:bg-[#c1303b] text-white px-8 sm:px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_8px_30px_rgba(230,57,70,0.4)] font-bangers text-[18px] sm:text-[22px] tracking-[1px]"
          >
            {isEn ? "Book Your Hand Wash Today" : "Reserva Tu Lavado Hoy"}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
