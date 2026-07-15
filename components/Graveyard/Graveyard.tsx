"use client";

import Image from "next/image";
import { graveyard } from "@/data/graveyard";
import "./Graveyard.css";

export default function Graveyard() {
  return (
    <section className="graveyard">

      <div className="graveyard-inner">

        <span className="graveyard-label">
          GRAVEYARD
        </span>

        <h2>
          Not everything
          <br />
          deserves to live.
        </h2>

        <div className="graveyard-gallery">

          {graveyard.map((item) => (
            <div
              className="graveyard-item"
              key={item.id}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="33vw"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
