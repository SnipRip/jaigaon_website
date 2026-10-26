import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExportSection } from "@/components/sections/export-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductsSection } from "@/components/sections/products-section";
import { WhatsAppSection } from "@/components/sections/whatsapp-section";

// The home page is the sections below, in order. Each section owns its own
// anchor id (#products, #export, #about, #whatsapp, #contact).
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <ExportSection />
      <AboutSection />
      <WhatsAppSection />
      <ContactSection />
    </>
  );
}
