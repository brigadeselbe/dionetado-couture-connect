import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Accueil", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Créations", href: "#nos-creations" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active section
      const sections = ["contact", "nos-creations", "services"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          return;
        }
      }
      setActive("#");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(8, 8, 8, 0.85)"
            : "rgba(8, 8, 8, 0.0)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.3)"
            : "none",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleLink("#"); }}
              className="flex-shrink-0"
            >
              <img
                src="/images/logo-dionetado.png"
                alt="DIONETADO"
                className="h-8 md:h-10 object-contain transition-all duration-300"
                style={{
                  filter: "drop-shadow(0 0 8px hsl(45 100% 50% / 0.3))",
                  opacity: scrolled ? 1 : 0.9,
                }}
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleLink(href); }}
                  className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    color: active === href ? "hsl(45 100% 55%)" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {label}
                  {active === href && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ background: "hsl(45 100% 55%)" }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="https://wa.me/221771131282"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 85% 60%))",
                color: "#111",
                boxShadow: "0 4px 16px hsl(45 100% 50% / 0.25)",
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              WhatsApp
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className="absolute top-0 right-0 h-full w-72 flex flex-col pt-20 pb-8 px-6 transition-transform duration-300"
          style={{
            background: "rgba(10,10,10,0.97)",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          {/* Logo inside menu */}
          <img
            src="/images/logo-dionetado.png"
            alt="DIONETADO"
            className="h-8 object-contain mb-10 self-start"
            style={{ filter: "drop-shadow(0 0 8px hsl(45 100% 50% / 0.3))" }}
          />

          <nav className="flex flex-col gap-2 flex-1">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleLink(href); }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
                style={{
                  color: active === href ? "hsl(45 100% 55%)" : "rgba(255,255,255,0.65)",
                  background: active === href ? "rgba(212,175,55,0.08)" : "transparent",
                  border: active === href
                    ? "1px solid rgba(212,175,55,0.2)"
                    : "1px solid transparent",
                }}
              >
                <span
                  className="w-1 h-4 rounded-full flex-shrink-0"
                  style={{
                    background: active === href
                      ? "hsl(45 100% 55%)"
                      : "rgba(255,255,255,0.15)",
                  }}
                />
                {label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/221771131282"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold mt-4 transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 85% 60%))",
              color: "#111",
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
            Contacter sur WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};
