import React from "react";
import "../styles/Footer.css";
import logo from "../assets/YB-logoRedonda.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer__container">

        {/* BLOCO CENTRAL (MARCA + SOCIAL) */}
        <div className="footer__center">

          <img
            src={logo}
            alt="Logo Yamê Barros"
            className="footer__logo"
          />

          <h2 className="footer__name">Yamê Barros</h2>
          <p className="footer__sub">Advogada · OAB/ES 00.000</p>

          <div className="footer__social">
            <a href="https://www.instagram.com/yamebarros.adv?igsh=OGt0c3A2NWZjaXE4" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>

           

            <a href="https://wa.me/5527981795469" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>

        </div>

      </div>

      <hr className="footer__divider" />

      <div className="footer__bottom">
        <p className="footer__copy">
          © {currentYear} Yamê Barros Advocacia. Todos os direitos reservados.
        </p>
      </div>

    </footer>
  );
}