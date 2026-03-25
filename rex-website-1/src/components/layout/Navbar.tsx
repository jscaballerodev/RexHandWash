import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Menu, X, Globe } from "lucide-react";
import { useLang } from "../../context/LangContext";

const t = {
  en: {
    home: "Home",
    services: "Services",
    reviews: "Reviews",
    faq: "FAQ",
    contact: "Contact",
    callNow: "Call Now",
  },
  es: {
    home: "Inicio",
    services: "Servicios",
    reviews: "Reseñas",
    faq: "Preguntas",
    contact: "Contacto",
    callNow: "Llama Ahora",
  },
};

export function Navbar() {
  const { lang, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const tx = t[lang];

  const links = [
    { label: tx.home,     href: "#hero" },
    { label: tx.services, href: "#services" },
    { label: tx.reviews,  href: "#reviews" },
    { label: tx.faq,      href: "#faq" },
    { label: tx.contact,  href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-rex-blue shadow-lg">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <img src="/logo.svg" alt="Rex Hand Wash" className="h-10 w-auto" />
          <span
            className="text-white font-bangers text-[28px] tracking-[2px]"
          >
            REX <span className="text-rex-red">HAND WASH</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-white hover:text-rex-amber transition-colors font-inter font-semibold text-[15px] uppercase tracking-[1px] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-rex-amber after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-white hover:text-rex-amber transition-colors cursor-pointer"
            title="Toggle language"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
            <span className="font-inter font-semibold text-[13px]">
              {lang === "en" ? "ES" : "EN"}
            </span>
          </button>
          <a
            href="tel:8138256513"
            className="bg-rex-red hover:bg-[#c1303b] text-white px-5 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(230,57,70,0.4)] font-bangers text-[18px] tracking-[1px]"
          >
            <Phone className="w-4 h-4" /> {tx.callNow}
          </a>
          <div className="flex items-center gap-3 text-white">
            <a
              href="https://instagram.com/rexhandwash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rex-amber transition-colors"
              aria-label="Instagram"
            >
              {/* Instagram icon (SVG inline — lucide-react dropped it) */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/rexhandwash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rex-amber transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu with framer-motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#2d3e75]"
          >
            <div className="px-6 pb-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white py-2 border-b border-white/10 font-inter font-semibold hover:text-rex-amber hover:pl-2 transition-all duration-200"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-1 text-white cursor-pointer"
                >
                  <Globe className="w-5 h-5" />
                  <span className="font-inter font-semibold text-[13px]">
                    {lang === "en" ? "ES" : "EN"}
                  </span>
                </button>
                <a
                  href="tel:8138256513"
                  className="bg-rex-red text-white px-5 py-2 rounded-lg font-bangers text-[18px]"
                >
                  <Phone className="w-4 h-4 inline mr-1" /> {tx.callNow}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
