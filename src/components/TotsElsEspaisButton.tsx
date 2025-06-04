import React from "react";
import "./TotsElsEspaisButton.css";

interface TotsElsEspaisButtonProps {
  onClick: () => void;
}

const TotsElsEspaisButton: React.FC<TotsElsEspaisButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      className="floating-button tots-els-espais"
      onClick={onClick}
      type="button"
    >
      Veure Tot
    </button>
  );
};

export default TotsElsEspaisButton;
