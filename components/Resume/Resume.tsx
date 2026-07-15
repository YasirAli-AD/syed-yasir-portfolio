"use client";

import "./Resume.css";

export default function Resume() {
  return (
    <section className="resume">

      <div className="resume-label">
        <span>RESUME</span>
      </div>

      <div className="resume-content">

        <div className="resume-left">

          <h2>
            Senior Art Director
          </h2>

          <p>
            13+ years crafting brands, campaigns,
            packaging and corporate communication
            across regional and international markets.
          </p>

          <div className="resume-actions">

            <a
              href="/resume/Syed-Yasir-Ali-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume ↗
            </a>

            <a
              href="/resume/Syed-Yasir-Ali-Resume.pdf"
              download
            >
              Download PDF ↓
            </a>

          </div>

        </div>

        <div className="resume-preview">

          <iframe
            src="/resume/Syed-Yasir-Ali-Resume.pdf#toolbar=0"
            title="Resume Preview"
          />

        </div>

      </div>

    </section>
  );
}
