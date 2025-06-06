import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./ChatWidget.css";

const ChatWidget: React.FC = () => {
  return (
    <button
      className="floating-button chat-widget"
      aria-label="Ouvrir la discussion WhatsApp"
      tabIndex={0}
      role="button"
      onClick={() => window.open("https://chatwith.io/s/376335381", "_blank", "noopener,noreferrer")}
      type="button"
    >
      <FaWhatsapp />
    </button>
  );
};

export default ChatWidget;
