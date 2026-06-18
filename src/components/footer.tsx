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

        {/* Social links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
          <a
            href="https://www.instagram.com/dionetadocouture?igsh=MTc0OHR5MmxwMHp5OA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white/60 hover:text-white transition-all hover:scale-105"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@dionetado.dasha?_r=1&_t=ZS-97IiR8mxh1l"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white/60 hover:text-white transition-all hover:scale-105"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.78 1.52V6.82a4.85 4.85 0 01-1.01-.13z"/>
            </svg>
            TikTok
          </a>
          <a
            href="mailto:dionetadocouture@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white/60 hover:text-white transition-all hover:scale-105"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            dionetadocouture@gmail.com
          </a>
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
