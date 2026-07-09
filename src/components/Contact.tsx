import React from "react";
import "../styles/Contact.css";

import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="contact">

      <div className="contact__container">

        {/* HEADER */}
        <div className="contact__header">
          <span className="contact__tag">Contato</span>

          <h2 className="contact__title">
            Vamos{" "}
            <span className="contact__highlight">
              conversar
            </span>
            ?
          </h2>

          <div className="contact__divider" />

          <p className="contact__text">
            Entre em contato para agendar uma consulta. O primeiro atendimento é um espaço de escuta — sem compromisso.
          </p>
        </div>

        {/* CARDS */}
        <div className="contact__grid">

          {/* WhatsApp */}
          <a
            href="https://wa.me/5527999999999"
            target="_blank"
            rel="noreferrer"
            className="contactCard"
          >
            <MessageCircle className="icon" />
            <div className="label">WhatsApp</div>
            <div className="value">(27) 981799-5469</div>
          </a>

          {/* Email */}
          <a
            href="mailto:contato@yamebarros.adv.br"
            className="contactCard"
          >
            <Mail className="icon" />
            <div className="label">E-mail</div>
            <div className="value">yamebarros.adv@gmail.com</div>
          </a>

          {/* Location */}
          <div className="contactCard">
            <MapPin className="icon" />
            <div className="label">Localização</div>
            <div className="value">Vitória — ES</div>
          </div>

        </div>

        {/* BUTTON */}
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0QmNlt5IAb04no4ZZzlpYpsLp0qzjSWwauXeqGq79aENAapxu2KU-JEe8XX_27PebC05TqMX8d"
          target="_blank"
          rel="noreferrer"
          className="contact__button"
        >
          <Phone className="btnIcon" />
          Agendar consulta
        </a>

      </div>
    </section>
  );
}