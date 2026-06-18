import { useState, useRef } from "react";
import { CollectionModal } from "./collection-modal";

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
    card.style.transform = `perspective(1200px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg) translateZ(20px)`;
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
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
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
      className="cursor-pointer rounded-2xl overflow-hidden relative group"
      style={{
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

      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transition: "transform 0.7s ease" }}
        />

        {/* Permanent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 90% 60%))",
              color: "#111",
            }}
          >
            {item.category}
          </span>
        </div>

        {/* View icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <span className="text-white text-sm font-bold">↗</span>
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-bold text-lg text-white mb-1 tracking-tight">
            {item.title}
          </h3>
          <p className="text-white/55 text-sm leading-snug mb-3">
            {item.description}
          </p>
          <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: "hsl(45 100% 60%)" }}>
            <span>Voir les détails</span>
            <span className="text-sm">→</span>
          </div>
        </div>
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
    { id: 1, image: "/images/collection-01-elegance-rose.png", title: "Élégance Rose", category: "Femme", description: "Tenue traditionnelle avec motifs délicats" },
    { id: 2, image: "/images/collection-02-majeste-coloree.png", title: "Majesté Colorée", category: "Femme", description: "Robe majestueuse aux couleurs vives" },
    { id: 3, image: "/images/collection-03-grace-brodee.png", title: "Grâce Brodée", category: "Femme", description: "Boubou avec broderies dorées traditionnelles" },
    { id: 4, image: "/images/collection-04-arc-en-ciel.png", title: "Arc-en-ciel", category: "Femme", description: "Création multicolore exceptionnelle" },
    { id: 5, image: "/images/collection-05-saphir-royal.png", title: "Saphir Royal", category: "Femme", description: "Tenue de soirée en bleu royal" },
    { id: 6, image: "/images/collection-06-mystique-bordeaux.png", title: "Mystique Bordeaux", category: "Femme", description: "Élégance en dentelle bordeaux" },
    { id: 7, image: "/images/collection-07-ocean-vibrant.png", title: "Océan Vibrant", category: "Femme", description: "Robe sirène aux tons océaniques" },
    { id: 8, image: "/images/collection-08-foret-emeraude.png", title: "Forêt Émeraude", category: "Femme", description: "Ensemble vert aux motifs dorés" },
    { id: 9, image: "/images/collection-09-dualite-doree.png", title: "Dualité Dorée", category: "Femme", description: "Mélange harmonieux vert et or" },
    { id: 10, image: "/images/collection-10-terre-afrique.png", title: "Terre d'Afrique", category: "Femme", description: "Ensemble aux motifs terrestres" },
  ];

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
          background:
            "radial-gradient(circle, hsl(45 100% 50%) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.08,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(350 75% 31%) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.1,
        }}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
            Notre collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Créations
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
          <p className="text-white/35 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre collection exclusive de prêt-à-porter traditionnel,
            où chaque pièce raconte une histoire d'élégance et d'authenticité.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {collections.map((item) => (
            <Card3D key={item.id} item={item} onClick={handleItemClick} />
          ))}
        </div>

        {/* Bottom stats glass panel */}
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
                  {num}
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
