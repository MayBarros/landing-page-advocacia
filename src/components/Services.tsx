import React from "react";
import "../styles/Service.css";

import { Scale, Users, Shield, Briefcase } from "lucide-react";
import ponteDetalhe from "../assets/ponte.jpg";

export default function Services() {
  const services = [
    {
      title: "Direito Empresarial",
      desc: "Auxilio na constituição e organização de sociedades, elaboração de acordo de sócios, governança corporativa, constituição de holdings familiares, planejamento sucessório, reorganização patrimonial e estratégias de proteção do patrimônio empresarial.",
      icon: Scale,
    },
    {
      title: "Direito de Família",
      desc: "Divórcios, dissolução de união estável e partilha de patrimônio complexo, especialmente quando envolvem empresas, participações societárias, propriedades rurais, holdings familiares e estruturas patrimoniais sofisticadas.",
      icon: Users,
    },
   
    {
      title: "Consultoria Jurídica",
      desc: "Meu compromisso é oferecer uma advocacia estratégica, técnica e personalizada, a partir de uma análise patrimonial detalhada e de uma visão integrada entre o Direito de Família e o Direito Empresarial, permitindo identificar riscos, maximizar resultados e proteger o patrimônio, sem descuidar da dimensão humana e da função social da empresa para a família.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="servicos" className="services">

      {/* BACKGROUND */}
      <div className="services__bg">
        <img src={ponteDetalhe} alt="" loading="lazy" />
        <div className="services__overlay" />
      </div>

      {/* CONTENT */}
      <div className="services__container">

        {/* HEADER */}
        <div className="services__header">
          <span className="services__tag">
            Áreas de atuação
          </span>

          <h2 className="services__title">
            Serviços jurídicos com{" "}
            <span className="services__highlight">
              excelência
            </span>
          </h2>

          <div className="services__divider" />

          <p className="services__subtitle">
            Soluções pensadas para cada situação — sempre com transparência, estratégia e comprometimento.
          </p>
        </div>

        {/* GRID */}
        <div className="services__grid">

          {services.map((s) => (
            <div key={s.title} className="serviceCard">

              <div className="serviceCard__icon">
                <s.icon />
              </div>

              <h3 className="serviceCard__title">
                {s.title}
              </h3>

              <p className="serviceCard__desc">
                {s.desc}
              </p>

              <div className="serviceCard__line" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}