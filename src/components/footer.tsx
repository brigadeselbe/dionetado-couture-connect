import { MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="py-16 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 7%) 0%, hsl(0 0% 4%) 100%)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(45 100% 50% / 0.25), transparent)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="/images/logo-dionetado.png"
                alt="DIONETADO"
                className="h-12 object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 10px hsl(45 100% 50% / 0.25))",
                }}
              />
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-5">
              L'excellence de la couture traditionnelle africaine, alliant
              savoir-faire ancestral et créativité moderne.
            </p>
            <div
              className="h-px w-14"
              style={{
                background:
                  "linear-gradient(to right, hsl(45 100% 50% / 0.5), transparent)",
              }}
            />
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/35 text-sm">
                <MapPin className="w-4 h-4 text-gold/50 flex-shrink-0" />
                <span>Liberté 6, Dakar, Sénégal</span>
              </div>
              <div className="flex items-center gap-2 text-white/35 text-sm">
                <Phone className="w-4 h-4 text-gold/50 flex-shrink-0" />
                <span>33 864 43 26</span>
              </div>
              <div className="flex items-center gap-2 text-white/35 text-sm">
                <Phone className="w-4 h-4 text-gold/50 flex-shrink-0" />
                <span>77 113 12 82</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-5">
              Nos Services
            </h4>
            <div className="space-y-2.5">
              {[
                "Couture Traditionnelle",
                "Prêt-à-porter",
                "Accessoires",
                "Tissus Premium",
              ].map((s) => (
                <p
                  key={s}
                  className="text-white/35 text-sm hover:text-white/60 transition-colors cursor-default"
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-white/20 text-xs">
            © 2024 DIONETADO — Tous droits réservés
          </p>
          <p className="text-white/20 text-xs">
            Couture Traditionnelle d'Excellence · Dakar, Sénégal
          </p>
        </div>
      </div>
    </footer>
  );
};
