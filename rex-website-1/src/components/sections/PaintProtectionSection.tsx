import { CheckCircle } from "lucide-react";
import { useLang } from "../../context/LangContext";
import { ScrollReveal } from "../shared/ScrollReveal";

const packages = {
  en: [
    {
      name: "Ceramic Coating — 3 Year Protection",
      price: "$599",
      image: "/images/3yearprotection.jpeg",
      features: [
        "Prep wash to remove old wax and buildup",
        "Clay bar treatment to remove contaminants",
        "Light polish to enhance shine",
        "3-year ceramic coating on paint and trim",
        "Wheels and door jambs cleaned",
        "Exterior glass cleaned",
      ],
    },
    {
      name: "Ceramic Coating — 5 Year Protection",
      price: "$899",
      image: "/images/5yearprotection.jpeg",
      features: [
        "Prep wash to remove residues and old wax",
        "Clay bar and iron decontamination",
        "Paint enhancement polish",
        "5-year ceramic coating on paint and trim",
        "Wheels and door jambs cleaned",
        "Streak-free glass cleaning",
      ],
    },
    {
      name: "2 Step Paint Correction",
      price: "$399",
      image: "/images/2steppaintcorrection.jpeg",
      features: [
        "Hand wash and paint preparation",
        "Clay bar decontamination",
        "Two-step machine polishing",
        "Removes up to 80–90% of paint defects",
        "Paint sealant for protection",
        "Wheels, door jambs, and glass cleaned",
      ],
    },
  ],
  es: [
    {
      name: "Recubrimiento Cerámico — 3 Años",
      price: "$599",
      image: "/images/3yearprotection.jpeg",
      features: [
        "Lavado preparatorio",
        "Tratamiento con barra de arcilla",
        "Pulido ligero",
        "Recubrimiento cerámico de 3 años",
        "Ruedas y marcos de puertas",
        "Vidrios exteriores limpios",
      ],
    },
    {
      name: "Recubrimiento Cerámico — 5 Años",
      price: "$899",
      image: "/images/5yearprotection.jpeg",
      features: [
        "Lavado preparatorio completo",
        "Descontaminación con arcilla y hierro",
        "Pulido de mejora de pintura",
        "Recubrimiento cerámico de 5 años",
        "Ruedas y marcos limpios",
        "Vidrios sin rayas",
      ],
    },
    {
      name: "Corrección de Pintura 2 Pasos",
      price: "$399",
      image: "/images/2steppaintcorrection.jpeg",
      features: [
        "Lavado a mano y preparación",
        "Descontaminación con arcilla",
        "Pulido de máquina de dos pasos",
        "Elimina 80–90% de defectos",
        "Sellador de pintura protector",
        "Ruedas, marcos y vidrios limpios",
      ],
    },
  ],
};

export function PaintProtectionSection() {
  const { lang } = useLang();
  const isEn = lang === "en";
  const data = packages[lang];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-12">
        <ScrollReveal direction="up">
          <div className="text-center flex flex-col gap-2">
            <h2
              className="text-rex-navy font-bangers tracking-[2px]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              {isEn
                ? "Paint Protection & Correction"
                : "Protección y Corrección de Pintura"}
            </h2>
            <p
              className="text-rex-red font-marker"
              style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
            >
              {isEn
                ? "Restore your vehicle's shine and protect your paint for years."
                : "Restaura el brillo de tu vehículo y protege tu pintura por años."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((p, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.15}>
              <div className="bg-rex-blue rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full group">
                <div className="h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col gap-5 flex-1">
                  <h3 className="text-white font-bangers text-[24px]">{p.name}</h3>
                  <p className="text-rex-amber font-inter font-extrabold text-[24px]">
                    {isEn ? `Starting at ${p.price}` : `Desde ${p.price}`}
                  </p>
                  <ul className="flex flex-col gap-3 flex-1">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-rex-amber shrink-0 mt-0.5" />
                        <span className="text-white/90 font-inter text-[14px]">{f}</span>
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
              {isEn ? "Book Now" : "Reserva Ahora"}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
