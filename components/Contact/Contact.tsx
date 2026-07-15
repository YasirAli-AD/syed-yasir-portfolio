"use client";

import "./Contact.css";

const links = [
  {
    label: "Behance",
    href: "https://www.behance.net/yasirali62",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yasir-ali-163bb6241/",
  },
];

export default function Contact() {
  return (
    <section className="contact">

      <div className="contact-top">

        <span className="contact-label">
          CONTACT
        </span>

        <h2 className="contact-title">
          Let's Create
          <br />
          Work That
          <br />
          Lasts.
        </h2>

      </div>

      <div className="contact-bottom">

        <div className="contact-left">

          <p className="contact-status">
            Available Worldwide
            <br />
            Freelance
            <br />
            Remote
            <br />
            Full-time
          </p>

        </div>

        <div className="contact-right">

          <a
            className="contact-email"
            href="mailto:syedyasirali2604@gmail.com"
          >
            syedyasirali2604@gmail.com
          </a>

          <a
            className="contact-email secondary"
            href="mailto:yasir820@yahoo.com"
          >
            yasir820@yahoo.com
          </a>

          <div className="contact-phone">
            <div className="contact-phone-group">

              <strong>Pakistan</strong>

              <a href="tel:+923343506436">
                +92 334 350 6436
              </a>

              <a
                href="https://wa.me/923343506436"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action"
              >
                WhatsApp ↗
              </a>

            </div>

            <div className="contact-phone-group">

              <strong>UAE</strong>

              <a href="https://wa.me/971501581172">
                +971 50 158 1172
              </a>

              <a
                href="https://wa.me/971501581172"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action"
              >
                WhatsApp ↗
              </a>

            </div>

          </div>
          <nav className="contact-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>

        </div>

      </div>

      <div className="contact-footer">
        © 2026 Syed Yasir Ali
      </div>

    </section>
  );
}
