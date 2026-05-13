import { ReactLenis } from "lenis/react";
import { LangProvider } from "./context/LangContext";

import { Navbar } from "./components/layout/Navbar";
import { FooterSection } from "./components/layout/FooterSection";

import { HeroSection } from "./components/sections/HeroSection";
import { WhyRexSection } from "./components/sections/WhyRexSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { PaintProtectionSection } from "./components/sections/PaintProtectionSection";
import { ReviewsSection } from "./components/sections/ReviewsSection";
import { FaqSection } from "./components/sections/FaqSection";
import { ContactSection } from "./components/sections/ContactSection";
import { GallerySection } from "./components/sections/GallerySection";
import { HomeCampaignPage } from "./components/home/HomeCampaignPage";

export default function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";

  if (normalizedPath === "/home") {
    return <HomeCampaignPage />;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      <LangProvider>
        <div className="min-h-screen font-inter">
          <Navbar />
          <main>
            <HeroSection />
            <WhyRexSection />
            <ServicesSection />
            <PaintProtectionSection />
            <ReviewsSection />
            <FaqSection />
            <ContactSection />
            <GallerySection />
          </main>
          <FooterSection />
        </div>
      </LangProvider>
    </ReactLenis>
  );
}
