"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { work } from "@/data/work";
import { projects } from "@/data/projects";

import ProjectViewer from "./ProjectViewer/ProjectViewer";

import "./Work.css";

const tabs = [
  {
    name: "Campaigns",
    count: work.filter((item) => item.category === "Campaigns").length,
  },
  {
    name: "Events & Activations",
    count: work.filter((item) => item.category === "Events & Activations").length,
  },

  {
    name: "Packaging",
    count: work.filter((item) => item.category === "Packaging").length,
  },
  {
    name: "Collateral",
    count: work.filter((item) => item.category === "Collateral").length,
  },
  {
    name: "Brand Identity",
    count: work.filter((item) => item.category === "Brand Identity").length,
  },
];


export default function Work() {
  const [active, setActive] = useState("Campaigns");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const selectedProject = useMemo(() => {
    if (!selectedProjectId) return null;
    return projects[selectedProjectId] ?? null;
  }, [selectedProjectId]);

  const campaignProjects = useMemo(
    () =>
      work
        .filter(
          (item) =>
            item.category === "Campaigns" &&
            item.projectId &&
            projects[item.projectId]
        )
        .map((item) => item.projectId!),
    []
  );

  const currentIndex =
    selectedProjectId !== null
      ? campaignProjects.indexOf(selectedProjectId)
      : -1;

  const goToNextProject = () => {
    if (currentIndex === -1) return;

    const next = campaignProjects[currentIndex + 1];

    if (next) {
      setSelectedProjectId(next);
    }
  };

  const goToPreviousProject = () => {
    if (currentIndex === -1) return;

    const previous = campaignProjects[currentIndex - 1];

    if (previous) {
      setSelectedProjectId(previous);
    }
  };

  return (
    <>
      <section className="work">
        <div className="work-header">
          <span>WORK</span>
        </div>

        <div className="work-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActive(tab.name)}
              className={active === tab.name ? "active" : ""}
            >
              <span>{tab.name}</span>
              <small>({tab.count})</small>
            </button>
          ))}
        </div>

        <div className="work-gallery">
          {work.length === 0 ? (
            <div className="gallery-placeholder">Curating Projects...</div>
          ) : (
            <div className="work-grid">
              {work
                .filter((item) => item.category === active)
                .map((item) => (
                  <div
                    className="work-card"
                    key={item.id}
                    onClick={() => {
                      if (item.projectId) {
                        setSelectedProjectId(item.projectId);
                      }
                    }}
                  >
                    {item.image.endsWith(".webm") ? (
                      <video
                        src={item.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="work-media"
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={
                          item.projectId
                            ? projects[item.projectId]?.title ?? item.category
                            : item.category
                        }
                        fill
                        sizes="33vw"
                      />
                    )}

                    <div className="work-card__overlay">
                      <div className="work-card__content">
                        <span className="work-card__category">
                          {item.category}
                        </span>

                        <h3 className="work-card__title">
                          {item.projectId
                            ? projects[item.projectId]?.title
                            : item.category}
                        </h3>

                        <span className="work-card__cta">
                          Explore →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        </section>

        <ProjectViewer
          isOpen={selectedProject !== null}
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
          onNext={goToNextProject}
          onPrevious={goToPreviousProject}
        />
        </>
        );
        }
