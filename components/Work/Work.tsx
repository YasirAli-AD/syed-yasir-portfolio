"use client";

import { useState } from "react";
import Image from "next/image";
import { work } from "@/data/work";
import "./Work.css";

const tabs = [
  {
    name: "Campaigns",
    count: work.filter(item => item.category === "Campaigns").length,
  },
  {
    name: "Events & Activations",
    count: work.filter(item => item.category === "Events & Activations").length,
  },
  {
    name: "Packaging",
    count: work.filter(item => item.category === "Packaging").length,
  },
  {
    name: "Corporate Collateral",
    count: work.filter(item => item.category === "Corporate Collateral").length,
  },
  {
    name: "Brand Identity",
    count: work.filter(item => item.category === "Brand Identity").length,
  },
];

export default function Work() {
  const [active, setActive] = useState("Campaigns");

  return (
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

          <div className="gallery-placeholder">

            Curating Projects...

          </div>

        ) : (

          <div className="work-grid">

            {work
              .filter((item) => item.category === active)
              .map((item) => (
                <div className="work-card" key={item.id}>
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
                    alt=""
                    fill
                    sizes="33vw"
                  />
                )}
                </div>
              ))}
            </div>
            )}

            </div>

            </section>
            );
            }
