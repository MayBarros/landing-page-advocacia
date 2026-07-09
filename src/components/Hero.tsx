import React from "react";
import "../styles/Hero.css";

import pontePhoto from "../assets/ponte.jpg";
import logo from "../assets/YB-Logo.png";


export default function Hero() {
  return (
    <section id="top" className="hero">
      {/* Background */}
      <div className="hero__bg">
        <img src={pontePhoto} alt="Terceira Ponte, Vitória - ES" />
        <div className="hero__overlay hero__overlay--right" />
        <div className="hero__overlay hero__overlay--top" />
      </div>

     

      {/* Conteúdo */}
      <div className="hero__container">
        <div className="hero__text">

          {/* Monograma */}
          <img
            src={logo}
            alt="YB"
            className="hero__logo"
          />

          {/* Nome */}
          <h1 className="hero__name">
            Yamê Barros
          </h1>

          {/* Slogan */}
          <span className="hero__subtitle">
            Advocacia com propósito
          </span>

          <div className="hero__divider" />

          <p className="hero__description">
           Assessoria jurídica humanizada, com atuação nacional e sede em Vitória/ES.
            Cada história merece ser ouvida — e defendida — com técnica,
            ética e cuidado.
          </p>

          <div className="hero__actions">
            <a href="#contato" className="btn btn--gold">
              Agende uma conversa
            </a>

            <a href="#servicos" className="btn btn--outline">
              Áreas de atuação
            </a>
          </div>

        </div>
      </div>

      <div className="hero__footer">
        Vitória · Espírito Santo
      </div>
    </section>
  );
}