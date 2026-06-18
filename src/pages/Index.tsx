import { Navbar } from "@/components/navbar";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { CollectionGallery } from "@/components/collection-gallery";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CollectionGallery />
      <ContactSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
