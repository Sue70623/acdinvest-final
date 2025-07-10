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
      onClick={() => window.open("https://services.tochat.be/es/api/business/send/76b9e3e6-6f6a-4229-ac8b-8069d610b5af", "_blank", "noopener,noreferrer")}
      type="button"
    >
      <FaWhatsapp />
    </button>
  );
};

export default ChatWidget;
