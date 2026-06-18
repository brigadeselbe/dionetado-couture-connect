import { Navbar } from "@/components/navbar";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { ScrollToTop } from "@/components/scroll-to-top";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { CollectionGallery } from "@/components/collection-gallery";
import { TestimonialsSection } from "@/components/testimonials-section";
import { VideosSection } from "@/components/videos-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CollectionGallery />
      <TestimonialsSection />
      <VideosSection />
      <ContactSection />
      <Footer />
      <WhatsAppFab />
      <ScrollToTop />
    </div>
  );
};

export default Index;
