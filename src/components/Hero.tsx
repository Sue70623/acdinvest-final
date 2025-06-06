import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";

const videos = [
  {
    src: "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/Video/Emocio-i-detall-l-essencia-del-teu-refugi-exclusiu.mp4",
    title: "ESTAT D’ANIM",
    link: "/qui-som",
    linkText: "Qui Som?",
    alt: "Vídeo sobre Estat d’Anim - Descobreix Quetx",
    type: "video",
  },
  {
    src: "https://ujyxlovgwtzguhiiabtw.supabase.co/storage/v1/object/public/acdinvestfoto/planadelbouservies/resort-plana-del-bou.webp",
    title: "ELS NOSTRES ESPAIS",
    link: "/espais",
    linkText: "Trobar el teu",
    alt: "Image temporaire sur Els Nostres Espais - Explora Quetx",
    type: "image",
  },
];

const Hero: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // 🔄 Recharge la vidéo lorsqu'on change de vidéo
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.load();

      // Gestion sécurisée de la lecture de la vidéo
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) =>
          console.warn("Erreur de lecture vidéo :", err.message)
        );
      }
    }
  }, [currentVideo]);

  return (
    <section className="hero">
      <div className="video-wrapper">
        <div className="video-container">
          {videos[currentVideo].type === "video" ? (
            <video
              autoPlay
              loop={false} // ❌ Désactive la boucle pour passer à la vidéo suivante
              muted
              ref={videoRef}
              key={currentVideo}
              onEnded={nextVideo} // ✅ Passe à la prochaine vidéo quand celle-ci se termine
            >
              <source src={videos[currentVideo].src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={videos[currentVideo].src}
              alt={videos[currentVideo].alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}

          {/* H2 sur la vidéo ou image */}
          <h2 className="hero-title">{videos[currentVideo].title}</h2>

          {/* ✅ Lien dynamique */}
          <a href={videos[currentVideo].link} className="hero-link">
            {videos[currentVideo].linkText}
          </a>

          {/* Boutons de navigation */}
          <button className="prev-video" onClick={prevVideo}>
            ‹
          </button>
          <button className="next-video" onClick={nextVideo}>
            ›
          </button>
        </div>
      </div>

      {/* ✅ H1 bien positionné sous la vidéo */}
      <h1 className="page-title">
        Espais, equilibri entre comoditat i natura, pensats per tu.
      </h1>
    </section>
  );
};

export default Hero;
