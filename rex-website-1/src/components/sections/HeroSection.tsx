import { useLang } from "../../context/LangContext";
import { ScrollReveal } from "../shared/ScrollReveal";

export function HeroSection() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <section id="hero" className="bg-white min-h-dvh flex items-center overflow-hidden py-8 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 w-full">
        {/* Text column */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6">
          <ScrollReveal direction="up" delay={0}>
            <h1
              className="font-bangers uppercase text-rex-blue"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05 }}
            >
              {isEn ? (
                <>
                  Gentle on Paint.<br />
                  Tough on Dirt.<br />
                  Hand-Washed to<br />
                  Perfection!
                </>
              ) : (
                <>
                  Suave con la Pintura.<br />
                  Duro con la Suciedad.<br />
                  Lavado a Mano<br />
                  a la Perfección!
                </>
              )}
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <p
              className="font-marker text-rex-navy"
              style={{ fontSize: "clamp(18px, 2.5vw, 28px)" }}
            >
              {isEn
                ? "Family-Owned Car Wash in Tampa, FL"
                : "Lavado de Autos Familiar en Tampa, FL"}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <a
              href="tel:8138256513"
              className="bg-rex-red hover:bg-[#c1303b] text-white px-8 py-4 rounded-full inline-flex items-center gap-2 w-fit transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_8px_30px_rgba(230,57,70,0.4)] font-bangers text-[22px] tracking-[1px]"
            >
              {isEn ? "Book Your Hand Wash Today" : "Reserva Tu Lavado Hoy"}
            </a>
          </ScrollReveal>
        </div>

        {/* Hero image */}
        <ScrollReveal direction="right" delay={0.15} className="flex-1 flex justify-center">
          <img
            src="/images/home.png"
            alt="Rex Hand Wash — Dinosaur and Car"
            className="w-full max-w-[280px] md:max-w-[600px] object-contain"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
