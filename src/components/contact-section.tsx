import { useState, FormEvent } from "react";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from "lucide-react";
import { Reveal } from "./scroll-reveal";

const SUBJECTS = [
  "Boubou / Ensemble",
  "Robe sur mesure",
  "Tenue de mariage",
  "Tenue de cérémonie",
  "Prêt-à-porter",
  "Autre",
];

const WA_ICON = (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
  </svg>
);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `Bonjour DIONETADO 👋`,
      ``,
      `*Nom :* ${name}`,
      phone ? `*Téléphone :* ${phone}` : null,
      `*Objet :* ${subject}`,
      message ? `*Message :* ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/221771131282?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:ring-2";
  const inputStyle = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
  };
  const inputFocusStyle = { "--tw-ring-color": "rgba(37,211,102,0.5)" } as React.CSSProperties;

  return (
    <div
      className="rounded-3xl p-8 md:p-12 text-white mb-8"
      style={{
        background: "linear-gradient(135deg, hsl(0 0% 7%), hsl(0 0% 13%), hsl(350 25% 10%))",
        boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Prêt à créer ensemble ?</h3>
          <p className="text-white/40 text-sm leading-relaxed">
            Remplissez le formulaire — votre message s'ouvrira directement dans WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                Votre nom *
              </label>
              <input
                required
                type="text"
                placeholder="ex : Fatou Diallo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                style={{ ...inputStyle, ...inputFocusStyle }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
                Téléphone (optionnel)
              </label>
              <input
                type="tel"
                placeholder="ex : +221 77 123 45 67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
                style={{ ...inputStyle, ...inputFocusStyle }}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
              Je cherche…
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
              style={{ ...inputStyle, ...inputFocusStyle }}
            >
              {SUBJECTS.map((s) => (
                <option key={s} value={s} style={{ background: "#1a1a1a" }}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
              Votre message (optionnel)
            </label>
            <textarea
              rows={3}
              placeholder="Décrivez votre projet, l'occasion, les couleurs souhaitées…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-none`}
              style={{ ...inputStyle, ...inputFocusStyle }}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: sent
                ? "linear-gradient(135deg, #1a9c3e, #128C7E)"
                : "linear-gradient(135deg, #25D366, #128C7E)",
              boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
            }}
          >
            {sent ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Message envoyé sur WhatsApp !
              </>
            ) : (
              <>
                {WA_ICON}
                Envoyer via WhatsApp
                <Send className="w-4 h-4 opacity-70" />
              </>
            )}
          </button>

          <p className="text-center text-white/25 text-xs">
            Votre message s'ouvrira dans l'application WhatsApp pour être envoyé.
          </p>
        </form>
      </div>
    </div>
  );
};

export const ContactSection = () => {
  return (
    <section
      id="contact"
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
        <Reveal direction="up" className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
            Où nous trouver
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nous Contacter
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
          <p className="text-gray-400 max-w-2xl mx-auto">
            Rendez-nous visite dans notre boutique ou contactez-nous pour
            discuter de vos projets de couture.
          </p>
        </Reveal>

        {/* Info cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Address */}
          <Reveal direction="left" delay={0}>
            <div
              className="p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 h-full"
              style={{
                background: "white",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{
                  background: "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 90% 60%))",
                  boxShadow: "0 6px 16px hsl(45 100% 50% / 0.28)",
                }}
              >
                <MapPin className="w-7 h-7" style={{ color: "#111" }} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Notre Adresse</h3>
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
                  background: "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 90% 60%))",
                  color: "#111",
                }}
              >
                📍 Voir sur Maps
              </a>
            </div>
          </Reveal>

          {/* Phone */}
          <Reveal direction="up" delay={120}>
            <div
              className="p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 h-full"
              style={{
                background: "white",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{
                  background: "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 90% 60%))",
                  boxShadow: "0 6px 16px hsl(45 100% 50% / 0.28)",
                }}
              >
                <Phone className="w-7 h-7" style={{ color: "#111" }} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Téléphone</h3>
              <div className="space-y-2 mb-4">
                <p className="text-2xl font-bold text-gradient-gold">33 864 43 26</p>
                <p className="text-2xl font-bold text-gradient-gold">77 113 12 82</p>
              </div>
              <p className="text-gray-400 text-sm">Appelez pour un rendez-vous</p>
            </div>
          </Reveal>

          {/* Hours */}
          <Reveal direction="right" delay={240}>
            <div
              className="p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 h-full"
              style={{
                background: "white",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{
                  background: "linear-gradient(135deg, hsl(45 100% 50%), hsl(40 90% 60%))",
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
          </Reveal>
        </div>

        {/* Contact Form → WhatsApp */}
        <Reveal direction="up" delay={80}>
          <ContactForm />
        </Reveal>

        {/* Social */}
        <Reveal direction="up" delay={160}>
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "white", border: "1px solid rgba(0,0,0,0.04)" }}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
              Retrouvez-nous sur les réseaux sociaux
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/dionetadocouture?igsh=MTc0OHR5MmxwMHp5OA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                  color: "white",
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@dionetado.dasha?_r=1&_t=ZS-97IiR8mxh1l"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: "#010101",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.78 1.52V6.82a4.85 4.85 0 01-1.01-.13z" />
                </svg>
                TikTok
              </a>
              {/* Snapchat */}
              <a
                href="https://snapchat.com/t/MEijdJll"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                style={{ background: "#FFFC00", color: "#000" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.873-.284-2.906-.703-3.145-1.271-.031-.075-.046-.15-.046-.226.016-.239.195-.465.45-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.304-4.837C7.392 1.077 10.739.807 11.727.807l.479-.014z"/>
                </svg>
                Snapchat
              </a>
              {/* Email */}
              <a
                href="mailto:dionetadocouture@gmail.com"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                style={{ background: "hsl(45 100% 50%)", color: "#111" }}
              >
                <Mail className="w-4 h-4" />
                dionetadocouture@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
