import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PropertyCardType2.css";

interface PropertyCardType2Props {
  title: string;
  description: string;
  images: string[];
  buttonLabel: string;
  link: string;
  reverse?: boolean;
  autoScroll?: boolean;
  onButtonClick?: () => void; // New optional prop for button click handler
}

const PropertyCardType2: React.FC<PropertyCardType2Props> = ({
  title,
  description,
  images,
  buttonLabel,
  link,
  reverse = false,
  autoScroll = true,
  onButtonClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoScroll && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length, autoScroll]);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (images.length === 0) {
    return (
      <div className="property-card-type2">
        <p>Aucune image disponible.</p>
      </div>
    );
  }

  // Obtenir les 3 images visibles
  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  function getAltFromImage(image: string, title: string): string {
    if (image && image.includes("piscina")) return "Piscina i sol a Plana del Bou";
    if (image && image.includes("fontaneda")) return "Vista de Fontaneda";
    if (image && image.includes("escoles-sept"))
      return "Edifici Escoles Sept a Sant Julià de Lòria";
    if (image && image.includes("properament"))
      return "Imatge properament disponible";
    if (image && image.includes("noguer-b"))
      return "Edifici El Noguer B a Sant Julià de Lòria";
    if (image && image.includes("edelweiss"))
      return "Edifici Edelweiss a la Seu d’Urgell";
    if (image && image.includes("naus-hesei")) return "Naus industrials a Aixovall";
    // fallback
    return title || "Imatge de la propietat";
  }

  return (
    <div className={`property-card-type2 ${reverse ? "reverse" : ""}`}>
      <div className="text-section">
        <h2>{title}</h2>
        <p>{description}</p>
        <button
          className="global-button"
          onClick={() => {
            if (onButtonClick) {
              onButtonClick(); // Ouvrir la modal si elle existe
            } else {
              window.location.href = link; // Sinon, naviguer vers le lien
            }
          }}
        >
          {buttonLabel}
        </button>
      </div>

      <div className="carousel-section">
        <button className="global-button prev-video" onClick={prev}>
          ‹
        </button>
        <div className="carousel-frame">
          {visibleImages.map((image, index) => (
            <img key={index} src={image} alt={getAltFromImage(image, title)} />
          ))}
        </div>
        <button className="global-button next-video" onClick={next}>
          ›
        </button>
      </div>
    </div>
  );
};

export default PropertyCardType2;
