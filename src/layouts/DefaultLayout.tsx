import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TotsElsEspaisButton from "../components/TotsElsEspaisButton";
import SideMenu from "../components/SideMenu";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ChatWidget from "../components/ChatWidget";
import "./DefaultLayout.css";

interface DefaultLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  title,
  description,
  children,
}) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KVH300V6RT"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KVH300V6RT');
          `}
        </script>
      </Helmet>
      <div className="default-layout">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <SideMenu
          isOpen={isSideMenuOpen}
          onClose={() => setIsSideMenuOpen(false)}
        />

        {/* Fixed buttons container */}
        <div className="floating-buttons-container">
          <div className="floating-buttons-wrapper">
            <TotsElsEspaisButton onClick={() => setIsSideMenuOpen(true)} />
            <ChatWidget />
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
