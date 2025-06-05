import React from "react";
import "./PropertyCardType3.css";

interface PropertyCardType3Props {
  title: string;
  image: string;
  caracteristics: string[];
  amenities: string[];
  status: string;
  reverse?: boolean;
  onViewGallery?: () => void;
  galleryLink?: string;
}

const PropertyCardType3: React.FC<PropertyCardType3Props> = ({
  title,
  image,
  caracteristics,
  amenities,
  status,
  reverse = false,
  onViewGallery,
  galleryLink,
}) => {
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
    <div className={`property-card-type3 ${reverse ? "reverse" : ""}`}>
      <div className="text-zone">
        <h2>{title}</h2>

        <div className="section">
          <h4>CARACTERÍSTIQUES</h4>
          <ul>
            {caracteristics.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h4>SERVEIS</h4>
          <ul>
            {amenities.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="image-zone">
        <img src={image} alt={getAltFromImage(image, title)} />
        <a
          className="view-gallery-button"
          onClick={(e) => {
            e.preventDefault();
            if (onViewGallery) onViewGallery();
          }}
        >
          📷 Veure totes les nostres fotos
        </a>
      </div>
    </div>
  );
};

export default PropertyCardType3;
