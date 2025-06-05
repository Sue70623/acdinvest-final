import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./ChatWidget.css";

const ChatWidget: React.FC = () => {
  return (
    <button
      className="floating-button chat-widget"
      aria-label="WhatsApp"
      onClick={() => window.open("https://chatwith.io/s/330631307849", "_blank", "noopener,noreferrer")}
      type="button"
    >
      <FaWhatsapp />
    </button>
  );
};

export default ChatWidget;
