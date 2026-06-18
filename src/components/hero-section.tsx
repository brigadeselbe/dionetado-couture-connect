import { Phone, MapPin, Scissors, Sparkles, ChevronDown } from "lucide-react";
import { CountUp } from "./count-up";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 4%) 0%, hsl(0 0% 8%) 60%, hsl(350 25% 7%) 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, hsl(350 75% 31%) 0%, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.18,
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full animate-float"
          style={{
            background:
              "radial-gradient(circle, hsl(45 100% 50%) 0%, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.12,
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating decorative */}
      <Scissors
        className="absolute top-16 left-12 w-9 h-9 rotate-12 animate-float opacity-10"
        style={{ color: "hsl(45 100% 50%)", animationDelay: "0.5s" }}
      />
      <Sparkles
        className="absolute top-28 right-16 w-7 h-7 animate-float opacity-15"
        style={{ color: "hsl(45 100% 50%)", animationDelay: "1.8s" }}
      />
      <Scissors
        className="absolute bottom-40 left-24 w-5 h-5 rotate-45 animate-float opacity-8"
        style={{ color: "hsl(45 100% 50%)", animationDelay: "1s" }}
      />
      <Sparkles
        className="absolute bottom-28 right-20 w-8 h-8 animate-float opacity-10"
        style={{ color: "hsl(45 100% 50%)", animationDelay: "0.3s" }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10 py-24">
        <div className="max-w-4xl mx-auto">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-10 animate-fade-in"
            style={{
              background: "rgba(212, 175, 55, 0.08)",
              border: "1px solid rgba(212, 175, 55, 0.22)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Sparkles className="w-3 h-3 text-gold" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              Couture d'Excellence · Dakar
            </span>
            <Sparkles className="w-3 h-3 text-gold" />
          </div>

          {/* Logo */}
          <div
            className="mb-8 flex justify-center animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 scale-150"
                style={{
                  background:
                    "radial-gradient(ellipse, hsl(45 100% 50% / 0.12) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <img
                src="/images/logo-dionetado.png"
                alt="Logo DIONETADO"
                className="h-40 md:h-56 object-contain relative z-10 animate-logo-glow"
              />
            </div>
          </div>

          {/* Gold divider */}
          <div
            className="flex items-center justify-center gap-4 mb-5 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="h-px flex-1 max-w-[90px]"
              style={{
                background:
                  "linear-gradient(to right, transparent, hsl(45 100% 50% / 0.6))",
              }}
            />
            <div className="w-1.5 h-1.5 rounded-full bg-gold opacity-70" />
            <div
              className="h-px flex-1 max-w-[90px]"
              style={{
                background:
                  "linear-gradient(to left, transparent, hsl(45 100% 50% / 0.6))",
              }}
            />
          </div>

          {/* Tagline */}
          <p
            className="text-xs md:text-sm text-white/45 tracking-[0.35em] uppercase mb-4 font-light animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Innovation &amp; Tradition · Couture Moderne
          </p>

          {/* Description */}
          <p
            className="text-sm md:text-base text-white/35 mb-14 max-w-lg mx-auto leading-relaxed font-light animate-fade-in"
            style={{ animationDelay: "0.55s" }}
          >
            L'art de la couture africaine revisité avec une approche moderne et
            innovante. Techniques contemporaines, designs avant-gardistes,
            finitions impeccables.
          </p>

          {/* Stats */}
          <div
            className="flex items-center justify-center gap-10 md:gap-16 mb-14 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            {[
              { num: "15+", label: "Années d'expérience" },
              { num: "500+", label: "Clients satisfaits" },
              { num: "100%", label: "Sur mesure" },
            ].map(({ num, label }, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1 text-gradient-gold">
                  <CountUp value={num} />
                </div>
                <div className="text-xs text-white/30 uppercase tracking-widest font-light">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Glass contact bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center rounded-2xl overflow-hidden mb-12 max-w-2xl mx-auto animate-fade-in"
            style={{
              animationDelay: "0.85s",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex items-center gap-2 px-6 py-4 text-white/50">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-sm">Liberté 6, Dakar</span>
            </div>
            <div
              className="hidden sm:block w-px h-8"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />
            <div className="flex items-center gap-2 px-6 py-4 text-white/50">
              <Phone className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-sm">33 864 43 26</span>
            </div>
            <div
              className="hidden sm:block w-px h-8"
              style={{ background: "rgba(255,255,255,0.08)" }}
            />
            <div className="flex items-center gap-2 px-6 py-4 text-white/50">
              <Phone className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-sm">77 113 12 82</span>
            </div>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="#nos-creations"
              className="px-8 py-4 rounded-xl font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 text-center"
              style={{
                background:
                  "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 85% 60%))",
                color: "#111",
                boxShadow:
                  "0 8px 32px hsl(45 100% 50% / 0.28), 0 0 0 1px hsl(45 100% 50% / 0.15)",
              }}
            >
              Découvrir nos créations
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold text-sm tracking-wide uppercase text-white/70 transition-all duration-300 hover:scale-105 hover:text-white text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-white/18 uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-white/18" />
      </div>
    </section>
  );
};