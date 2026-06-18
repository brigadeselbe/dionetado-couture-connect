import { useRef } from "react";
import { Scissors, Users, ShoppingBag, Palette } from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard3D = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateZ(12px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="animate-fade-in"
      style={{
        animationDelay: `${index * 0.12}s`,
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="text-center p-8 rounded-2xl h-full"
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background:
              "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 90% 60%))",
            boxShadow: "0 8px 20px hsl(45 100% 50% / 0.28)",
          }}
        >
          <service.icon className="w-8 h-8" style={{ color: "#111" }} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: Scissors,
      title: "Couture Traditionnelle",
      description:
        "Création de tenues traditionnelles authentiques avec des techniques ancestrales préservées par nos maîtres couturiers.",
    },
    {
      icon: Users,
      title: "Prêt-à-porter Homme & Femme",
      description:
        "Collections modernes alliant style contemporain et touches traditionnelles pour tous les goûts et occasions.",
    },
    {
      icon: ShoppingBag,
      title: "Accessoires Uniques",
      description:
        "Sélection d'accessoires artisanaux : sacs, bijoux, chaussures et ornements pour parfaire votre style.",
    },
    {
      icon: Palette,
      title: "Tissus d'Exception",
      description:
        "Large gamme de tissus authentiques, wax, bogolan, et étoffes traditionnelles de la plus haute qualité.",
    },
  ];

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "hsl(0 0% 97%)" }}
    >
      {/* Soft top accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(45 100% 50% / 0.25), transparent)",
        }}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
            Ce que nous faisons
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
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
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            DIONETADO vous offre une expertise complète dans l'art de la couture
            traditionnelle, du conseil personnalisé à la création sur mesure.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard3D key={index} service={service} index={index} />
          ))}
        </div>

        {/* Stats banner */}
        <div
          className="rounded-3xl p-12 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, hsl(0 0% 7%), hsl(0 0% 13%), hsl(350 25% 11%))",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          }}
        >
          <h3 className="text-2xl font-bold mb-3">Service Sur Mesure</h3>
          <p className="text-white/40 mb-10 max-w-2xl mx-auto leading-relaxed">
            Chaque création est unique. Nous travaillons en étroite
            collaboration avec vous pour donner vie à vos idées et créer des
            pièces qui vous ressemblent.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "15+", label: "Années d'expérience" },
              { num: "500+", label: "Clients satisfaits" },
              { num: "100%", label: "Fait main" },
            ].map(({ num, label }, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2 text-gradient-gold">
                  {num}
                </div>
                <p className="text-white/35 text-xs uppercase tracking-widest">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
