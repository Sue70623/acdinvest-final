import React from "react";
import "./ArticleDePresseCard.css";

interface ArticleDePresseCardProps {
  title: string;
  dateSource: string;
  image: string;
  excerpt: string;
  link: string;
  onClick: () => void;
}

const ArticleDePresseCard: React.FC<ArticleDePresseCardProps> = ({
  title,
  dateSource,
  image,
  excerpt,
  link,
}) => {
  function getAltFromImage(image: string, title: string): string {
    if (image && image.includes("piscina"))
      return "Piscina i sol a Plana del Bou";
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
    return title;
  }

  return (
    <div className="article-de-presse-card">
      <div className="article-image">
        <img src={image} alt={getAltFromImage(image, title)} />
      </div>
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p className="article-date-source">{dateSource}</p>
        <p className="article-excerpt">{excerpt}</p>
        <a
          className="article-button"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          LIUR MAS
        </a>
      </div>
    </div>
  );
};

export default ArticleDePresseCard;
