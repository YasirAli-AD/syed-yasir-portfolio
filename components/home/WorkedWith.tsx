"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Abbott", count: "12 Projects" },
  { name: "Hershey's", count: "08 Projects" },
  { name: "Reese's", count: "06 Projects" },
  { name: "PediaSure", count: "14 Projects" },
  { name: "Unilever", count: "16 Projects" },
  { name: "Bayer", count: "09 Projects" },
  { name: "GSK", count: "11 Projects" },
  { name: "FrieslandCampina", count: "07 Projects" },
];

export default function WorkedWith() {
  return (
    <section className="worked">
      <motion.span
        className="worked-label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Worked With
      </motion.span>

      <div className="worked-list">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            className="worked-row"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.5,
            }}
          >
            <h2>{brand.name}</h2>

            <span>{brand.count}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
