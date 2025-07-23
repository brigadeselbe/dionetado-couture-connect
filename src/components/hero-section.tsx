import { Button } from "@/components/ui/button";
import { Phone, MapPin, Scissors, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-gold text-8xl">
          <Scissors className="w-16 h-16 rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10 text-gold text-8xl">
          <Sparkles className="w-12 h-12 -rotate-12" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-gold text-8xl opacity-50">
          <Scissors className="w-8 h-8 rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center text-primary-foreground relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wide animate-logo-glow">
              DIONETADO
            </h1>
            <div className="h-1 w-32 bg-gold mx-auto mb-6 animate-pulse"></div>
            <p className="text-xl md:text-2xl font-light tracking-wider opacity-90 animate-fade-in">
              Innovation & Tradition • Couture Moderne
            </p>
          </div>

          {/* Services */}
          <div className="mb-12">
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed">
              L'art de la couture africaine revisité avec une approche moderne et innovante. 
              Techniques contemporaines, designs avant-gardistes, finitions impeccables.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 hover:animate-float">
                  <Scissors className="w-8 h-8 text-gold" />
                </div>
                <p className="text-sm">Couture Traditionnelle</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 hover:animate-float">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <p className="text-sm">Prêt-à-porter</p>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 hover:animate-float">
                  <Scissors className="w-8 h-8 text-gold" />
                </div>
                <p className="text-sm">Accessoires</p>
              </div>
              <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 hover:animate-float">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <p className="text-sm">Tissus Premium</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5 text-gold" />
              <span>Liberté 6, Dakar</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2 text-lg">
                <Phone className="w-5 h-5 text-gold" />
                <span>33 864 43 26</span>
              </div>
              <span className="hidden md:block text-gold">•</span>
              <div className="flex items-center gap-2 text-lg">
                <Phone className="w-5 h-5 text-gold" />
                <span>77 113 12 82</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button variant="gold" size="lg" className="text-lg px-8 py-3 hover:scale-105 transition-transform">
              Découvrir nos créations
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-gold text-gold hover:bg-gold hover:text-gold-foreground hover:scale-105 transition-transform">
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};