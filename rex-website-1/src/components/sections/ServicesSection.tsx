import { CheckCircle, Award } from "lucide-react";
import { useLang } from "../../context/LangContext";
import { ScrollReveal } from "../shared/ScrollReveal";
import { ImageWithFallback } from "../shared/ImageWithFallback";

const services = {
  en: [
    {
      name: "Standard In & Out",
      price: "$99",
      image: "/images/standard_package.jpeg",
      popular: false,
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
      image: "/images/premium_package.jpeg",
      popular: false,
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
      image: "/images/standard_package.jpeg",
      popular: false,
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
      image: "/images/premium_package.jpeg",
      popular: false,
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
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-12">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((s, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.15}>
              <div className="relative bg-white border-2 border-rex-blue/20 rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full group">
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
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <h3 className="text-rex-navy font-bangers text-[26px]">{s.name}</h3>
                  <p className="text-rex-red font-inter font-extrabold text-[22px]">
                    {isEn ? `Starting at ${s.price}` : `Desde ${s.price}`}
                  </p>
                  <ul className="flex flex-col gap-2 flex-1">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-rex-blue shrink-0 mt-0.5" />
                        <span className="font-inter text-[14px] text-[#444]">{f}</span>
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
              className="bg-rex-red hover:bg-[#c1303b] text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_8px_30px_rgba(230,57,70,0.4)] font-bangers text-[22px] tracking-[1px]"
            >
              {isEn ? "Call Now" : "Llama Ahora"}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
