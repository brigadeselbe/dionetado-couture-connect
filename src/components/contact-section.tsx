import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "hsl(0 0% 97%)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(45 100% 50% / 0.2), transparent)",
        }}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
            Où nous trouver
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nous Contacter
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(to right, transparent, hsl(45 100% 50%))",
              }}
            />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div
              className="h-px w-12"
              style={{
                background:
                  "linear-gradient(to left, transparent, hsl(45 100% 50%))",
              }}
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Rendez-nous visite dans notre boutique ou contactez-nous pour
            discuter de vos projets de couture.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Address */}
          <div
            className="p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "white",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{
                background:
                  "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 90% 60%))",
                boxShadow: "0 6px 16px hsl(45 100% 50% / 0.28)",
              }}
            >
              <MapPin className="w-7 h-7" style={{ color: "#111" }} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Notre Adresse
            </h3>
            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
              Liberté 6
              <br />
              Dakar, Sénégal
            </p>
            <a
              href="https://maps.app.goo.gl/X5gh1bjnKawKSxai7?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 90% 60%))",
                color: "#111",
              }}
            >
              📍 Voir sur Maps
            </a>
          </div>

          {/* Phone */}
          <div
            className="p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "white",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{
                background:
                  "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 90% 60%))",
                boxShadow: "0 6px 16px hsl(45 100% 50% / 0.28)",
              }}
            >
              <Phone className="w-7 h-7" style={{ color: "#111" }} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Téléphone</h3>
            <div className="space-y-2 mb-4">
              <p className="text-2xl font-bold text-gradient-gold">
                33 864 43 26
              </p>
              <p className="text-2xl font-bold text-gradient-gold">
                77 113 12 82
              </p>
            </div>
            <p className="text-gray-400 text-sm">Appelez pour un rendez-vous</p>
          </div>

          {/* Hours */}
          <div
            className="p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "white",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{
                background:
                  "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 90% 60%))",
                boxShadow: "0 6px 16px hsl(45 100% 50% / 0.28)",
              }}
            >
              <Clock className="w-7 h-7" style={{ color: "#111" }} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Horaires</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Lun – Sam</span>
                <span className="text-gray-400">10h30 – 20h30</span>
              </div>
              <div className="h-px bg-gray-100" />
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Dimanche</span>
                <span className="text-gray-400">Sur rendez-vous</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-3xl p-12 text-white text-center mb-8"
          style={{
            background:
              "linear-gradient(135deg, hsl(0 0% 7%), hsl(0 0% 13%), hsl(350 25% 10%))",
            boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
          }}
        >
          <h3 className="text-2xl font-bold mb-3">Prêt à créer ensemble ?</h3>
          <p className="text-white/40 mb-8 max-w-xl mx-auto leading-relaxed">
            Que vous souhaitiez une tenue traditionnelle pour une occasion
            spéciale ou moderniser votre garde-robe, notre équipe vous
            accompagne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/221771131282"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
              style={{ background: "#25D366", color: "white" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
              </svg>
              Contacter via WhatsApp
            </a>
            <a
              href="tel:338644326"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white/70 transition-all hover:scale-105 hover:text-white"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Appeler maintenant
            </a>
          </div>
        </div>

        {/* Social */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{
            background: "white",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Suivez-nous bientôt sur les réseaux sociaux
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook (bientôt)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span>Instagram (bientôt)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4 text-gold" />
              <span>Email pro (bientôt)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
