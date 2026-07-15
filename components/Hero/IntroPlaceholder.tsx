"use client";

import { useEffect, useState } from "react";

export default function IntroPlaceholder() {
  const [hide, setHide] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimate(true);
      });
    });

    const timer = setTimeout(() => {
      setHide(true);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (

    <div className={`intro ${hide ? "intro-hide" : ""}`}>
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
      >
        <filter id="heroDistortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed="2"
            result="noise"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          >
            <animate
              attributeName="scale"
              values="0;85;40;0"
              dur="1.5s"
              begin="0.4s"
              fill="freeze"
            />
          </feDisplacementMap>
        </filter>
      </svg>

      <div className="intro-stage">

        <div className={`wave ${animate ? "wave-active" : ""}`} />

        <h1
          className={`intro-word ${animate ? "word-active" : ""}`}
          style={{
            filter: "url(#heroDistortion)",
          }}
        >
          SYED
        </h1>

      </div>
    </div>
  );
}
