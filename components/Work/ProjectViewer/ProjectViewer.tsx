"use client";

import "./ProjectViewer.css";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectInfo from "./ProjectInfo";
import type { Project } from "@/data/projects";

// These components will be created next
// import ProjectGallery from "./ProjectGallery";
import Image from "next/image";
// import ThumbnailStrip from "./ThumbnailStrip";

export interface ProjectViewerProps {
  isOpen: boolean;
  project: Project | null;

  onClose: () => void;

  onNext?: () => void;
  onPrevious?: () => void;
}

export default function ProjectViewer({
  isOpen,
  project,
  onClose,
  onNext,
  onPrevious,
}: ProjectViewerProps) {
  // ---------------------------------------
  // Body Scroll Lock
  // ---------------------------------------

  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // ---------------------------------------
  // Keyboard Shortcuts
  // ---------------------------------------

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          onNext?.();
          break;

        case "ArrowLeft":
          onPrevious?.();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  // ---------------------------------------

  return (
    <AnimatePresence mode="wait">
      {isOpen && project && (
        <motion.div
          className="project-viewer"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.35,
          }}
        >
          {/* Background */}

          <motion.div
            className="project-viewer__backdrop"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
          />

          {/* Viewer */}

          <motion.div
            className="project-viewer__panel"
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 20,
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            {/* Header */}

            <header className="project-viewer__header">
              <button
                type="button"
                onClick={onPrevious}
              >
                ← Previous
              </button>

              <button
                type="button"
                onClick={onClose}
              >
                Close
              </button>

              <button
                type="button"
                onClick={onNext}
              >
                Next →
              </button>
            </header>

            {/* Content */}

            <div className="project-viewer__content">

              <div className="project-viewer__gallery">
                <div className="project-viewer__kv">
                  <Image
                    src={project.keyVisual}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width:1200px) 100vw, 45vw"
                    className="project-viewer__kv-image"
                  />
                </div>
              </div>

              <div className="project-viewer__info">

                <ProjectInfo project={project} />

              </div>

            </div>

            {/* Footer */}

            <footer className="project-viewer__footer">

              {/* <ThumbnailStrip project={project} /> */}

            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
