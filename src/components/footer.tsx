import { Scissors, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Scissors className="w-6 h-6 text-gold" />
              <h3 className="text-2xl font-bold">DIONETADO</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              L'excellence de la couture traditionnelle africaine, 
              alliant savoir-faire ancestral et créativité moderne.
            </p>
            <div className="h-1 w-16 bg-gold mx-auto md:mx-0"></div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm">Liberté 6, Dakar</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-sm">33 864 43 26</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-sm">77 113 12 82</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-gold">Nos Services</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Couture Traditionnelle</p>
              <p>Prêt-à-porter</p>
              <p>Accessoires</p>
              <p>Tissus Premium</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 DIONETADO - Tous droits réservés | Couture Traditionnelle d'Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};