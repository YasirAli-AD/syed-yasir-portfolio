"use client";

import IntroPlaceholder from "./IntroPlaceholder";
import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">


      {/* Top Navigation */}
      <header className="hero-header">
        <span className="hero-logo">SY.</span>

        <div className="hero-status">
          <span className="dot" />
          AVAILABLE FOR HIRE
        </div>
      </header>

      {/* Left Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.8,
          duration: 0.8,
        }}
      >
        <h1 className="hero-title">
          <span>SYED</span>
          <span>YASIR</span>
          <span>ALI</span>
        </h1>

        <div className="hero-meta">

          <span>Art Director focused on</span>

          <span>brand campaigns,</span>

          <span>packaging systems,</span>

          <span>and visual storytelling.</span>


        </div>


      </motion.div>

      {/* Character */}
      <motion.div
        className="hero-character"
        initial={{
          opacity: 0,
          x: 80,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
      >
        <img
          src="/images/hero/01.png"
          alt="Syed Yasir Ali"
          draggable={false}
        />
      </motion.div>

      {/* Scroll */}
      <div className="hero-scroll">
        <span />
        SCROLL
      </div>
    </section>
  );
}
