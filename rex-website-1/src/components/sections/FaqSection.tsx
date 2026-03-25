import { Phone } from "lucide-react";
import { useLang } from "../../context/LangContext";
import { ScrollReveal } from "../shared/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = {
  en: [
    {
      q: "Do I Need an Appointment?",
      a: "Walk-ins are welcome, but booking is recommended.",
    },
    {
      q: "How Long Does a Hand Wash Take?",
      a: "Around 60 minutes, depending on the service.",
    },
    {
      q: "Is Ceramic Coating Worth It?",
      a: "Absolutely! It protects your paint for years and keeps your car looking brand new.",
    },
    {
      q: "Is There a Waiting Area?",
      a: "Yes! We have seating available while you wait. Plus, our plaza offers a variety of nearby businesses where you can grab a bite while we make your car shine.",
    },
    {
      q: "What Payment Methods Do You Accept?",
      a: "We accept cash, credit/debit cards, Zelle, and Apple Pay.",
    },
  ],
  es: [
    {
      q: "¿Necesito una Cita?",
      a: "Aceptamos sin cita, pero se recomienda reservar.",
    },
    {
      q: "¿Cuánto Tarda un Lavado a Mano?",
      a: "Aproximadamente 60 minutos, según el servicio.",
    },
    {
      q: "¿Vale la Pena el Recubrimiento Cerámico?",
      a: "¡Absolutamente! Protege tu pintura por años y mantiene tu auto como nuevo.",
    },
    {
      q: "¿Hay Área de Espera?",
      a: "¡Sí! Tenemos asientos disponibles. Además, nuestra plaza ofrece negocios cercanos donde puedes comer mientras hacemos brillar tu auto.",
    },
    {
      q: "¿Qué Métodos de Pago Aceptan?",
      a: "Aceptamos efectivo, tarjetas de crédito/débito, Zelle y Apple Pay.",
    },
  ],
};

export function FaqSection() {
  const { lang } = useLang();
  const isEn = lang === "en";
  const data = faqs[lang];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-12">
        <ScrollReveal direction="up">
          <h2
            className="text-center text-rex-navy font-bangers tracking-[2px]"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            FAQ
          </h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Accordion + CTA */}
          <div className="flex-1 flex flex-col gap-6">
            <ScrollReveal direction="up" delay={0.1}>
              <Accordion type="single" collapsible className="flex flex-col gap-3">
                {data.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-2 border-rex-blue/20 rounded-xl overflow-hidden px-2 last:border-b-2"
                  >
                    <AccordionTrigger className="text-rex-red font-inter font-extrabold text-[16px] hover:no-underline py-5 px-3">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-inter text-[15px] text-[#555] leading-relaxed px-3 pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <a
                href="tel:8138256513"
                className="bg-rex-red hover:bg-[#c1303b] text-white px-8 py-4 rounded-full w-fit transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_8px_30px_rgba(230,57,70,0.4)] inline-flex items-center gap-2 font-bangers text-[20px] tracking-[1px]"
              >
                <Phone className="w-5 h-5" />
                {isEn ? "Call Now 813-825-6513" : "Llama Ahora 813-825-6513"}
              </a>
            </ScrollReveal>
          </div>

          {/* FAQ dinosaur image */}
          <ScrollReveal direction="right" delay={0.15} className="flex-1 flex justify-center">
            <img
              src="/images/faq.png"
              alt="FAQ Dinosaur"
              className="w-full max-w-[500px] object-contain"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
