import TotsElsEspaisButton from "./TotsElsEspaisButton";
import "./FloatingButtonsWrapper.css";
import ChatWidget from "./ChatWidget"; // Ensure the correct path to ChatWidget
import ScrollToTopButton from "./ScrollToTopButton"; // Ensure the correct path to ScrollToTopButton

const FloatingButtonsWrapper: React.FC = () => {
  return (
    <div className="floating-buttons-wrapper">
      <TotsElsEspaisButton onClick={() => { /* TODO: définir l'action */ }} />
      <ChatWidget />
      <ScrollToTopButton />
    </div>
  );
};

export default FloatingButtonsWrapper;
