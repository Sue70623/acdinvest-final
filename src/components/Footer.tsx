import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-social">
          <a
            href="https://www.instagram.com/acd_invest/?utm_source=ig_web_button_share_sheet"
            className="footer-instagram-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram ACD Invest"
          >
            <FaInstagram className="footer-instagram-icon" />
          </a>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">ADREÇA</h3>
          <p>
            <FaMapMarkerAlt className="footer-icon" />
            P. I. CAMP DE L'AVENÇADÉ, NAU 3<br />
            MÒDUL 34
            <br />
            AIXOVALL AD600 SANT JULIÀ DE LÒRIA
            <br />
            PRINCIPAT D'ANDORRA
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">CONTACTA'NS</h3>
          <p>
            <a href="mailto:administracio@quetx.net" className="footer-link">
              administracio@quetx.net
            </a>
            <br />
            <FaPhoneAlt className="footer-icon" />
            <a href="tel:+376742000" className="footer-link">
              +376 742 000
            </a>
            <br />
            <a
              href="https://wa.me/376335338"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escriu-nos per WhatsApp
            </a>
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">HORARI</h3>
          <p>
            <FaClock className="footer-icon" />
            DE DL. A DJ. DE 08:00H A 16:30H
            <br />
            DV. DE 08:00H-14:00H
            <br />
            DS. I DG. TANCAT
          </p>
        </div>
      </footer>
      <div className="footer-credit-bar">© 2025 Suzanne Victor. Tots els drets reservats.</div>
    </>
  );
};

export default Footer;
