import { useState, useRef } from "react";
import { CollectionModal } from "./collection-modal";
import { CountUp } from "./count-up";

interface CollectionItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

const Card3D = ({
  item,
  onClick,
}: {
  item: CollectionItem;
  onClick: (item: CollectionItem) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg) translateZ(20px)`;
    card.style.boxShadow = `${x * -20}px ${y * -20}px 50px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.4)`;
    const glare = card.querySelector<HTMLDivElement>("[data-glare]");
    if (glare) {
      glare.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.18) 0%, transparent 65%)`;
      glare.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    card.style.boxShadow = "0 10px 35px rgba(0,0,0,0.35)";
    const glare = card.querySelector<HTMLDivElement>("[data-glare]");
    if (glare) glare.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(item)}
      className="cursor-pointer rounded-2xl overflow-hidden relative flex-shrink-0"
      style={{
        width: "280px",
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
        boxShadow: "0 10px 35px rgba(0,0,0,0.35)",
      }}
    >
      {/* Glare overlay */}
      <div
        data-glare=""
        className="absolute inset-0 z-20 pointer-events-none rounded-2xl opacity-0 transition-opacity duration-300"
        style={{ mixBlendMode: "overlay" }}
      />

      <div className="relative overflow-hidden" style={{ height: "340px" }}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          style={{ transition: "transform 0.5s ease" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 90% 60%))",
              color: "#111",
            }}
          >
            {item.category}
          </span>
        </div>

        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-bold text-base text-white leading-tight">
            {item.title}
          </h3>
          <p className="text-white/50 text-xs mt-1">{item.description}</p>
          <p className="text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: "hsl(45 100% 60%)" }}>
            Voir →
          </p>
        </div>
      </div>
    </div>
  );
};

const MarqueeRow = ({
  items,
  direction,
  speed,
  onClick,
}: {
  items: CollectionItem[];
  direction: "left" | "right";
  speed: number;
  onClick: (item: CollectionItem) => void;
}) => {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-3">
      <div
        className="flex gap-5"
        style={{
          width: "max-content",
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {doubled.map((item, i) => (
          <Card3D key={`${direction}-${i}`} item={item} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export const CollectionGallery = () => {
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: CollectionItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const collections: CollectionItem[] = [
    { id: 1,  image: "/images/photo-01-boubou-bleu-ciel.jpg",       title: "Boubou Bleu Ciel",        category: "Boubou",   description: "Kaftan brodé de fils dorés, coupe ample et royale" },
    { id: 2,  image: "/images/photo-02-robe-rose-peplum.jpg",        title: "Rose Peplum",             category: "Robe",     description: "Robe sirène rose à manches bouffantes et basque" },
    { id: 3,  image: "/images/photo-03-robe-multicolore-dentelle.jpg", title: "Multicolore Dentelle", category: "Robe",     description: "Robe évasée multicolore avec dentelle sur le buste" },
    { id: 4,  image: "/images/photo-04-robe-arc-en-ciel.jpg",        title: "Arc-en-ciel",             category: "Robe",     description: "Robe arc-en-ciel épaules dénudées aux motifs cachemire" },
    { id: 5,  image: "/images/photo-05-robe-bleue-royale.jpg",       title: "Bleue Royale",            category: "Robe",     description: "Robe longue bleu électrique avec dentelle et fente" },
    { id: 6,  image: "/images/photo-06-arc-en-ciel-profil.jpg",      title: "Arc-en-ciel Prestige",   category: "Robe",     description: "Version prestige de notre création arc-en-ciel" },
    { id: 7,  image: "/images/photo-07-robe-bordeaux-sirene.jpg",    title: "Bordeaux Sirène",         category: "Robe",     description: "Robe sirène en dentelle bordeaux et tissu brodé or" },
    { id: 8,  image: "/images/photo-08-ensemble-vert-dentelle.jpg",  title: "Vert Dentelle",           category: "Ensemble", description: "Ensemble deux pièces vert foncé aux broderies florales" },
    { id: 9,  image: "/images/photo-09-ensemble-vert-dore.jpg",      title: "Vert & Or",               category: "Ensemble", description: "Veste verte jacquard feuilles dorées sur jupe or" },
    { id: 10, image: "/images/photo-10-bordeaux-dentelle-face.jpg",  title: "Bordeaux Élégance",       category: "Robe",     description: "Robe dentelle bordeaux sirène avec traîne majestueuse" },
    { id: 11, image: "/images/photo-11-ensemble-noir-zebre.jpg",     title: "Noir & Zébré",            category: "Ensemble", description: "Top peplum noir sur jupe imprimé zébré multicolore" },
    { id: 12, image: "/images/photo-12-robe-marine-dentelle.jpg",    title: "Marine Dentelle",         category: "Robe",     description: "Robe sirène bleu marine avec dentelle argentée" },
    { id: 13, image: "/images/photo-13-noir-zebre-profil.jpg",       title: "Noir Zébré Prestige",     category: "Ensemble", description: "Silhouette élancée en peplum noir et jupe zébrée" },
  ];

  const row1 = collections.slice(0, 7);
  const row2 = collections.slice(6);

  return (
    <section
      id="nos-creations"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 9%) 0%, hsl(0 0% 7%) 100%)",
      }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 right-0 w-[350px] h-[350px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(45 100% 50%) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.08,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(350 75% 31%) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.1,
        }}
      />

      {/* Fade edges */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, hsl(0 0% 8%), transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, hsl(0 0% 8%), transparent)",
        }}
      />

      {/* Header */}
      <div className="container mx-auto px-4 mb-14 relative z-20">
        <div className="text-center animate-fade-in">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
            Notre collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Créations
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div
              className="h-px w-12"
              style={{ background: "linear-gradient(to right, transparent, hsl(45 100% 50%))" }}
            />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div
              className="h-px w-12"
              style={{ background: "linear-gradient(to left, transparent, hsl(45 100% 50%))" }}
            />
          </div>
          <p className="text-white/35 max-w-2xl mx-auto leading-relaxed">
            Passez votre souris sur une création pour l'explorer en 3D — cliquez pour voir les détails.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="relative z-0 mb-6">
        <MarqueeRow items={row1} direction="left" speed={45} onClick={handleItemClick} />
      </div>
      <div className="relative z-0 mb-14">
        <MarqueeRow items={row2} direction="right" speed={38} onClick={handleItemClick} />
      </div>

      {/* Bottom stats */}
      <div className="container mx-auto px-4 relative z-20">
        <div
          className="rounded-3xl p-10 text-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            ✨ Chaque création est unique ✨
          </h3>
          <p className="text-white/35 mb-8 max-w-xl mx-auto leading-relaxed">
            Nos tenues allient tradition et modernité, confectionnées avec
            passion par nos maîtres couturiers expérimentés.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "10+", label: "Styles différents" },
              { num: "100%", label: "Fait sur mesure" },
              { num: "48h", label: "Livraison rapide" },
            ].map(({ num, label }, i) => (
              <div key={i}>
                <div className="text-3xl font-bold mb-1 text-gradient-gold">
                  <CountUp value={num} />
                </div>
                <p className="text-white/28 text-xs uppercase tracking-widest">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CollectionModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
