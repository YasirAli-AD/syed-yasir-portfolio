"use client";

import type { Project } from "@/data/projects";

interface ProjectInfoProps {
  project: Project;
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="project-info__section">
      <span className="project-info__label">{title}</span>

      <div className="project-info__body">
        {children}
      </div>
    </section>
  );
}

export default function ProjectInfo({
  project,
}: ProjectInfoProps) {
  return (
    <div className="project-info">

      <header className="project-info__header">

        <span className="project-info__category">
          {project.category}
        </span>

        <h1 className="project-info__title">
          {project.title}
        </h1>

      </header>

      <div className="project-info__meta">

        <div>
          <small>Client</small>
          <strong>{project.client}</strong>
        </div>

        <div>
          <small>Role</small>
          <strong>{project.role}</strong>
        </div>

        <div>
          <small>Year</small>
          <strong>{project.year}</strong>
        </div>

      </div>

      <Section title="Overview">
        <p>{project.overview}</p>
      </Section>

      <Section title="Challenge">
        <p>{project.challenge}</p>
      </Section>

      <Section title="Solution">
        <p>{project.solution}</p>
      </Section>

      <Section title="Outcome">
        <p>{project.outcome}</p>
      </Section>

      <Section title="Tools">

        <div className="project-info__tools">

          {project.tools.map((tool) => (
            <span
              key={tool}
              className="project-info__tool"
            >
              {tool}
            </span>
          ))}

        </div>

      </Section>

      {project.recognition && project.recognition.length > 0 && (
        <div className="project-info__section">
          <h3>Recognition</h3>

          <div className="project-info__recognition">
            {project.recognition.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-info__recognition-link"
              >
                ↗ {item.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {project.links && project.links.length > 0 && (
        <div className="project-info__section">
          <h3>Campaign Film</h3>

          <div className="project-info__links">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-info__link"
              >
                ↗ {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
