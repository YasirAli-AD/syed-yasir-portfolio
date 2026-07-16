"use client";

import Image from "next/image";

import type { Project } from "@/data/projects";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({
  project,
}: ProjectGalleryProps) {
  return (
    <div className="project-gallery">
      <div className="project-gallery__hero">
        <Image
        src={project.keyVisual}
          alt={project.title}
          fill
          priority
          className="project-gallery__image"
          sizes="(max-width:1200px) 100vw, 60vw"
        />
      </div>
    </div>
  );
}
