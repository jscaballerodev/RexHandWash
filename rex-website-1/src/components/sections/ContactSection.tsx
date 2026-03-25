import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useLang } from "../../context/LangContext";
import { ScrollReveal } from "../shared/ScrollReveal";

export function ContactSection() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <section id="contact" className="py-16 md:py-24 bg-rex-red">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-12">
        <ScrollReveal direction="up">
          <h2
            className="text-center text-white font-bangers tracking-[2px]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            {isEn ? "Visit Us or Get in Touch" : "Visítanos o Contáctanos"}
          </h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Contact details */}
          <ScrollReveal direction="up" delay={0.1} className="flex-1 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-white shrink-0 mt-1" />
              <div>
                <p className="text-white font-inter font-bold text-[20px]">
                  10867 Cross Creek Blvd.
                </p>
                <p className="text-white font-inter font-bold text-[20px]">
                  Tampa, Florida 33647
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-white shrink-0" />
              <a
                href="tel:8138256513"
                className="text-white hover:text-rex-amber transition-colors font-inter font-bold text-[20px]"
              >
                813-825-6513
              </a>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-white shrink-0 mt-1" />
              <div>
                <p className="text-white font-inter font-bold text-[18px]">
                  {isEn ? "Tues–Sun: 9 AM – 6 PM" : "Mar–Dom: 9 AM – 6 PM"}
                </p>
                <p className="text-white/80 font-inter text-[16px]">
                  {isEn
                    ? "Mondays by appointment only."
                    : "Lunes solo con cita."}
                </p>
              </div>
            </div>

            <p className="text-white/90 font-marker text-[18px]">
              {isEn
                ? "Serving New Tampa, Cross Creek, Wesley Chapel & Surrounding Areas"
                : "Sirviendo New Tampa, Cross Creek, Wesley Chapel y Áreas Circundantes"}
            </p>

            <a
              href="mailto:team@rexhandwash.com?subject=Booking%20Inquiry%20-%20Rex%20Hand%20Wash"
              className="bg-rex-blue hover:bg-rex-navy text-white px-8 py-4 rounded-full w-fit transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_8px_30px_rgba(59,77,140,0.4)] font-bangers text-[22px] tracking-[1px] inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {isEn ? "Email Us" : "Envíanos un Email"}
            </a>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal direction="left" delay={0.15} className="flex-1 w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: "400px" }}>
              <iframe
                src="https://maps.google.com/maps?q=10867+Cross+Creek+Boulevard,+Tampa,+FL+33647&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rex Hand Wash Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
