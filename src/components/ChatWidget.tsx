import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./ChatWidget.css";

const ChatWidget: React.FC = () => {
  return (
    <div className="floating-button chat-widget">
      <a
        href="https://chatwith.io/s/330631307849"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ChatWidget;
