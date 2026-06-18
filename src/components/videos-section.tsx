import { useRef, useState } from "react";
import { Play, X, Volume2, VolumeX } from "lucide-react";
import { Reveal } from "./scroll-reveal";

const VIDEOS = [
  { src: "/videos-web/video-02.mp4", label: "Tenue brodée" },
  { src: "/videos-web/video-03.mp4", label: "Présentation atelier" },
  { src: "/videos-web/video-04.mp4", label: "Essayage sur mesure" },
  { src: "/videos-web/video-05.mp4", label: "Finitions à la main" },
  { src: "/videos-web/video-06.mp4", label: "Défilé de créations" },
  { src: "/videos-web/video-07.mp4", label: "Collection spéciale" },
  { src: "/videos-web/video-08.mp4", label: "Tenue de cérémonie" },
  { src: "/videos-web/video-10.mp4", label: "Coulisses atelier" },
];

const VideoCard = ({
  video,
  onClick,
}: {
  video: (typeof VIDEOS)[0];
  onClick: () => void;
}) => {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        background: "#111",
        aspectRatio: "9/16",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
      onClick={onClick}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      }}
    >
      <video
        ref={ref}
        src={video.src}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        muted
        playsInline
        loop
        preload="metadata"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-60" />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:opacity-0"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <Play className="w-6 h-6 text-white fill-white ml-1" />
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-medium text-sm">{video.label}</p>
      </div>
    </div>
  );
};

const VideoModal = ({
  video,
  onClose,
}: {
  video: (typeof VIDEOS)[0];
  onClose: () => void;
}) => {
  const [muted, setMuted] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setMuted((m) => {
      if (ref.current) ref.current.muted = !m;
      return !m;
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl overflow-hidden"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={ref}
          src={video.src}
          className="w-full"
          autoPlay
          playsInline
          loop
          controls={false}
          style={{ display: "block" }}
        />

        {/* Controls */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {muted ? (
              <VolumeX className="w-4 h-4 text-white" />
            ) : (
              <Volume2 className="w-4 h-4 text-white" />
            )}
          </button>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Label */}
        <div
          className="absolute bottom-0 left-0 right-0 p-5"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
          }}
        >
          <p className="text-white font-semibold">{video.label}</p>
          <p className="text-white/50 text-xs">DIONETADO — Couture d'Excellence</p>
        </div>
      </div>
    </div>
  );
};

export const VideosSection = () => {
  const [active, setActive] = useState<(typeof VIDEOS)[0] | null>(null);

  return (
    <section
      className="py-28"
      style={{
        background:
          "linear-gradient(135deg, hsl(0 0% 7%) 0%, hsl(350 25% 8%) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#b8860b" }}
            >
              En coulisses
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos créations en mouvement
            </h2>
            <p className="text-white/40 max-w-md mx-auto leading-relaxed text-sm">
              Survolez une vidéo pour la lancer, cliquez pour la voir en grand.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.src} direction="up" delay={i * 60}>
              <VideoCard video={v} onClick={() => setActive(v)} />
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <VideoModal video={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
};
