import { CheckCircle, Award } from "lucide-react";
import { useLang } from "../../context/LangContext";
import { ScrollReveal } from "../shared/ScrollReveal";
import { ImageWithFallback } from "../shared/ImageWithFallback";

const services = {
  en: [
    {
      name: "Standard In & Out",
      price: "$99",
      image: "/images/standard_package2.jpeg",
      popular: false,
      description:
        "Complete interior & exterior restoration for a like-new finish",
      features: [
        "Gentle hand wash using pH-neutral soap and premium wash mitts",
        "Deep cleaning of wheels and door jambs",
        "Streak-free glass cleaning",
        "High-quality protective wax application",
        "Interior wipe-down and full vacuum",
      ],
    },
    {
      name: "Deluxe Package",
      price: "$199",
      image: "/images/deluxe_package.jpeg",
      popular: true,
      description:
        "Deep cleaning for seats, carpets, and all interior surfaces",
      features: [
        "Everything included in Standard In & Out",
        "Professional paint sealant for longer-lasting shine and protection",
        "Deep cleaning of seats, carpets, and interior panels",
        "Extra attention to interior surfaces and detailing",
      ],
    },
    {
      name: "Premium Package",
      price: "$260",
      image: "/images/premium_package2.jpeg",
      popular: false,
      description:
        "Long-lasting protection that keeps your car glossy and protected",
      features: [
        "Everything included in Deluxe Package",
        "Clay bar treatment and iron removal to eliminate embedded contaminants",
        "Advanced paint sealant for enhanced paint protection",
        "Detailed exterior surface cleaning and shine enhancement",
        "Premium finishing touches for a deeper gloss",
      ],
    },
  ],
  es: [
    {
      name: "Estándar Interior y Exterior",
      price: "$99",
      image: "/images/standard_package2.jpeg",
      popular: false,
      description:
        "Restauración completa interior y exterior para un acabado como nuevo",
      features: [
        "Lavado a mano con jabón pH neutro y guantes premium",
        "Limpieza profunda de ruedas y marcos de puertas",
        "Limpieza de vidrios sin rayas",
        "Aplicación de cera protectora de alta calidad",
        "Limpieza interior y aspirado completo",
      ],
    },
    {
      name: "Paquete Deluxe",
      price: "$199",
      image: "/images/deluxe_package.jpeg",
      popular: true,
      description:
        "Limpieza profunda de asientos, alfombras y todas las superficies interiores",
      features: [
        "Todo lo incluido en Estándar",
        "Sellador de pintura profesional",
        "Limpieza profunda de asientos, alfombras y paneles",
        "Atención extra a superficies interiores y detallado",
      ],
    },
    {
      name: "Paquete Premium",
      price: "$260",
      image: "/images/premium_package2.jpeg",
      popular: false,
      description:
        "Protección duradera que mantiene tu auto brillante y protegido",
      features: [
        "Todo lo incluido en Deluxe",
        "Tratamiento con barra de arcilla y eliminación de hierro",
        "Sellador avanzado para protección de pintura",
        "Limpieza detallada de superficie exterior",
        "Acabados premium para un brillo más profundo",
      ],
    },
  ],
};

export function ServicesSection() {
  const { lang } = useLang();
  const isEn = lang === "en";
  const data = services[lang];

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 sm:px-6 lg:px-8 md:gap-12">
        <ScrollReveal direction="up">
          <h2
            className="text-center text-rex-navy font-bangers tracking-[2px]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            {isEn
              ? "Our Most Requested Detailing Services"
              : "Nuestros Servicios Más Solicitados"}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {data.map((s, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.15}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-rex-blue/20 bg-white shadow-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl">
                {s.popular && (
                  <div className="absolute top-4 right-4 bg-rex-amber text-rex-navy px-3 py-1 rounded-full flex items-center gap-1 z-10 font-inter font-extrabold text-[12px]">
                    <Award className="w-4 h-4" />
                    {isEn ? "MOST POPULAR" : "MÁS POPULAR"}
                  </div>
                )}
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6 md:gap-5 md:p-7">
                  <h3 className="text-[26px] leading-tight text-rex-navy font-bangers">{s.name}</h3>
                  <p className="text-rex-red font-inter font-extrabold text-[22px]">
                    {isEn ? `Starting at ${s.price}` : `Desde ${s.price}`}
                  </p>
                  <p className="font-inter text-[15px] leading-relaxed text-[#2f3b5f]">{s.description}</p>
                  <ul className="flex flex-1 flex-col gap-2.5">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-rex-blue shrink-0 mt-0.5" />
                        <span className="font-inter text-[14px] leading-relaxed text-[#444]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex justify-center">
            <a
              href="tel:8138256513"
              className="bg-rex-red hover:bg-[#c1303b] text-white px-10 py-4 rounded-full transition-[transform,box-shadow,background-color] duration-300 hover:scale-105 shadow-lg hover:shadow-[0_8px_30px_rgba(230,57,70,0.4)] font-bangers text-[22px] tracking-[1px]"
            >
              {isEn ? "Call Now" : "Llama Ahora"}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
