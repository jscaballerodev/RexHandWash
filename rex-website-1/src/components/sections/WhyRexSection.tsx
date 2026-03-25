import { Star, CheckCircle } from "lucide-react";
import { useLang } from "../../context/LangContext";
import { ScrollReveal } from "../shared/ScrollReveal";

const benefits = {
  en: [
    "100% Hand Wash — No Automated Machines",
    "Premium Products & Ceramic Protection Options",
    "Trusted by Tampa Locals",
    "Walk-Ins Welcome (Appointments Recommended)",
  ],
  es: [
    "100% Lavado a Mano — Sin Máquinas Automáticas",
    "Productos Premium y Opciones de Protección Cerámica",
    "Confianza de los Residentes de Tampa",
    "Sin Cita Previa (Se Recomienda Reservar)",
  ],
};

export function WhyRexSection() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="bg-rex-blue rounded-3xl p-8 md:p-16 flex flex-col gap-8">
          <ScrollReveal direction="up">
            <h2
              className="text-center text-white font-bangers tracking-[2px]"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              {isEn ? "Why Rex Hand Wash?" : "¿Por Qué Rex Hand Wash?"}
            </h2>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <ScrollReveal direction="left" delay={0.1} className="flex-1 flex justify-center">
              <img
                src="/images/whyrexhandwash.png"
                alt="Why Rex Hand Wash"
                className="w-full max-w-[400px] rounded-2xl object-contain"
              />
            </ScrollReveal>

            {/* Benefits list */}
            <div className="flex-1 flex flex-col gap-6">
              {benefits[lang].map((b, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="flex items-start gap-3">
                    {i === 2 ? (
                      <div className="flex items-center gap-1 shrink-0 mt-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-5 h-5 text-rex-amber fill-rex-amber" />
                        ))}
                      </div>
                    ) : (
                      <CheckCircle className="w-6 h-6 text-rex-amber shrink-0 mt-0.5" />
                    )}
                    <span className="text-white font-inter font-bold text-[18px]">{b}</span>
                  </div>
                </ScrollReveal>
              ))}

              <ScrollReveal direction="up" delay={0.45}>
                <a
                  href="tel:8138256513"
                  className="bg-rex-red hover:bg-[#c1303b] text-white px-8 py-4 rounded-full w-fit transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_8px_30px_rgba(230,57,70,0.4)] mt-4 font-bangers text-[20px] tracking-[1px] inline-block"
                >
                  {isEn ? "Book Your Hand Wash Today" : "Reserva Tu Lavado Hoy"}
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
