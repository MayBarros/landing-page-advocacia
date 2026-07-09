import React from "react";
import "../styles/About.css";

import advogadaPhoto from "../assets/advogada.jpg";

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="about__container">
        
        {/* IMAGE SIDE */}
        <div className="about__imageWrapper">
          <div className="about__frame" />

          <img
            src={advogadaPhoto}
            alt="Dra. Yamê Barros"
            className="about__image"
            loading="lazy"
          />

          <div className="about__accentBox" />
        </div>

        {/* TEXT SIDE */}
        <div className="about__content">
          <span className="about__tag">
            Sobre a advogada
          </span>

          <h2 className="about__title">
            Uma advocacia{" "}
            <span className="about__highlight">
              próxima
            </span>{" "}
            e comprometida.
          </h2>

          <div className="about__divider" />

          <p className="about__text">
            Sou <strong>Yamê Barros</strong>, advogada inscrita na OAB/ES 30216,
            com atuação nacional e sede em Vitória. Acredito
            em uma advocacia que traduz o Direito em cuidado — escutando cada
            cliente com atenção antes de qualquer parecer.
          </p>

          <p className="about__text">
            Meu trabalho reúne rigor técnico, discrição e uma escuta
            genuinamente humana. Do primeiro atendimento à decisão final, você
            tem clareza, respostas e um caminho jurídico traçado com estratégia.
          </p>

          {/* STATS */}
          <div className="about__stats">
            <div className="stat">
              <div className="stat__value">OAB/ES 30216</div>
              <div className="stat__label">Regularmente inscrita</div>
            </div>

            <div className="stat">
              <div className="stat__value">100%</div>
              <div className="stat__label">Atendimento personalizado</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}