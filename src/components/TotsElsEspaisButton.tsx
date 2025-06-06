import React from "react";
import "./TotsElsEspaisButton.css";

interface TotsElsEspaisButtonProps {
  onClick?: () => void;
}

const TotsElsEspaisButton: React.FC<TotsElsEspaisButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      className="floating-button tots-els-espais"
      onClick={onClick}
      type="button"
      aria-label="Afficher tous les espaces"
      tabIndex={0}
      role="button"
    >
      Tots els <br />espais
    </button>
  );
};

export default TotsElsEspaisButton;
