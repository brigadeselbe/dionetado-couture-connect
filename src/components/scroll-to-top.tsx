import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Retour en haut"
      className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, #821428, #5a0e1c)",
        boxShadow: "0 4px 20px rgba(130,20,40,0.45)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.85)",
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px) scale(1.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) scale(1)";
      }}
    >
      <ChevronUp className="w-5 h-5 text-white" strokeWidth={2.5} />
    </button>
  );
};
