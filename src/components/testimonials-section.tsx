import { useRef, useEffect } from "react";
import { Reveal } from "./scroll-reveal";

const TESTIMONIALS = [
  {
    name: "Aissatou Diallo",
    location: "Dakar, Sénégal",
    outfit: "Robe de mariage",
    text: "Ma robe de mariage était absolument parfaite. Chaque détail était soigné, les broderies étaient magnifiques. Je n'aurais pas pu rêver mieux pour mon grand jour.",
    initials: "AD",
    color: "#821428",
  },
  {
    name: "Mariama Bâ",
    location: "Thiès, Sénégal",
    outfit: "Ensemble bazin brodé",
    text: "La qualité du travail est exceptionnelle. Mon ensemble bazin a fait l'unanimité lors de la cérémonie. Tout le monde me demandait où j'avais cousu !",
    initials: "MB",
    color: "#b8860b",
  },
  {
    name: "Fatou Ndiaye",
    location: "Saint-Louis, Sénégal",
    outfit: "Boubou traditionnel",
    text: "Service rapide et professionnel. Le boubou est livré en 3 jours, exactement comme demandé. La coupe est impeccable et le tissu de très bonne qualité.",
    initials: "FN",
    color: "#2d5a27",
  },
  {
    name: "Rokhaya Sow",
    location: "Liberté 6, Dakar",
    outfit: "Tenue de baptême",
    text: "J'ai commandé une tenue pour le baptême de mon fils. Le résultat m'a tellement plu que j'ai déjà passé une deuxième commande pour la Tabaski. Je recommande vivement !",
    initials: "RS",
    color: "#4a4a8a",
  },
  {
    name: "Ndeye Coumba Fall",
    location: "Parcelles Assainies",
    outfit: "Robe cocktail",
    text: "Professionnalisme au top. Ils ont su traduire exactement ce que j'avais en tête. La robe est élégante, moderne et très confortable. Merci DIONETADO !",
    initials: "NC",
    color: "#821428",
  },
  {
    name: "Khady Thiam",
    location: "Almadies, Dakar",
    outfit: "Ensemble kaftan",
    text: "Des couturières talentueuses et à l'écoute. Mon kaftan pour le mariage de ma sœur était somptueux. Les finitions sont dignes des plus grandes maisons de couture.",
    initials: "KT",
    color: "#b8860b",
  },
  {
    name: "Adja Sarr",
    location: "Pikine, Dakar",
    outfit: "Boubou grand boubou",
    text: "Très satisfaite de ma commande ! Le grand boubou est magnifique, bien taillé et les broderies dorées sont sublimes. Je reviendrai certainement.",
    initials: "AS",
    color: "#2d5a27",
  },
  {
    name: "Binta Diagne",
    location: "Rufisque, Sénégal",
    outfit: "Tenue de Tabaski",
    text: "DIONETADO a transformé mon idée en réalité. La tenue de Tabaski était exactement ce que je voulais. Coupes parfaites, tissus de qualité. 100% recommandé !",
    initials: "BD",
    color: "#4a4a8a",
  },
];

const STARS = Array.from({ length: 5 });

const TestimonialCard = ({ t }: { t: (typeof TESTIMONIALS)[0] }) => (
  <div
    className="flex-shrink-0 w-80 rounded-2xl p-6 flex flex-col gap-4 mx-3"
    style={{
      background: "white",
      boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      border: "1px solid rgba(0,0,0,0.05)",
    }}
  >
    {/* Stars */}
    <div className="flex gap-1">
      {STARS.map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="#f59e0b" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>

    {/* Quote */}
    <p className="text-sm text-gray-600 leading-relaxed flex-1">"{t.text}"</p>

    {/* Tag */}
    <span
      className="self-start text-xs font-semibold px-3 py-1 rounded-full"
      style={{ background: `${t.color}15`, color: t.color }}
    >
      {t.outfit}
    </span>

    {/* Author */}
    <div className="flex items-center gap-3 pt-1 border-t border-gray-50">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
        style={{ background: t.color }}
      >
        {t.initials}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{t.name}</p>
        <p className="text-xs text-gray-400">{t.location}</p>
      </div>
    </div>
  </div>
);

export const TestimonialsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);

  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalW = track.scrollWidth / 2;

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += 0.5;
        if (posRef.current >= totalW) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      className="py-28 overflow-hidden"
      style={{ background: "hsl(0 0% 97%)" }}
    >
      <div className="container mx-auto px-4 mb-14">
        <Reveal direction="up">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#b8860b" }}>
              Ce qu'elles disent
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos clientes témoignent
            </h2>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed text-sm">
              Plus de 500 clientes satisfaites depuis notre ouverture. Leur confiance est notre plus belle récompense.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Scrolling track */}
      <div
        className="relative"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10"
          style={{ background: "linear-gradient(to right, hsl(0 0% 97%), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10"
          style={{ background: "linear-gradient(to left, hsl(0 0% 97%), transparent)" }}
        />

        <div className="flex py-4 will-change-transform" ref={trackRef} style={{ width: "max-content" }}>
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Global rating */}
      <Reveal direction="up" delay={80}>
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full" style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <div className="flex gap-0.5">
              {STARS.map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="#f59e0b" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-gray-800">5.0</span>
            <span className="text-gray-400 text-sm">— Plus de 500 avis clients</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
