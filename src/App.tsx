/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "framer-motion"; // Note: standard import for stability
import { Instagram } from "lucide-react";

interface SectionProps {
  text: string;
  bgImageUrl?: string;
  bgColor: string;
  gradient?: string;
  textColor: string;
  accentColor: string;
  id: string;
  index: number;
}

const Section: React.FC<SectionProps> = ({
  text,
  bgImageUrl,
  bgColor,
  textColor,
  accentColor,
  id,
  index,
}) => {
  // Your exact coordinates
  const POSITIONS = [
    "bottom-20 md:top-20 md:right-12 max-w-[280px] md:max-w-md", // 0: Top Right
    "bottom-40 md:bottom-20 md:left-12 max-w-[320px] ", // 1: Bottom Left
    "bottom-10 md:bottom-20 md:right-12 max-w-[280px] md:max-w-md", // 2: Bottom Right
  ];

  return (
    <section
      id={id}
      className="relative h-screen w-full overflow-hidden bg-charcoal font-mono "
      style={{ backgroundColor: bgColor }}
    >
      {/* 1. The Constrained Container (1600px limit) */}
      <div className="relative size-full max-w-[1600px] mx-auto overflow-hidden">
        {/* Background Layer inside the 1600px box */}
        {bgImageUrl && (
          <div className="absolute inset-0 size-full z-0">
            <div
              className="size-full bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImageUrl})` }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        {/* 2. The Anchor Layer (The invisible grid for positioning) */}
        <div className="absolute inset-0 size-full z-10 pointer-events-none">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: true }}
            // transition={{ duration: 0.7 }}
            className={`
    absolute pointer-events-auto w-[85%]
    
    inset-x-0 mx-auto 
    
    md:inset-x-auto md:mx-0 md:w-fit 
    
    ${POSITIONS[index]}
  `}
          >
            <div
              className="p-6 md:p-8 max-w-sm md:max-w-md"
              style={{
                backgroundColor: `${bgColor}cc`,
                borderColor: accentColor,
                color: textColor,
              }}
            >
              <p className="text-base text-xl md:text-xl leading-relaxed text-center md:text-left">
                {text}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const sections = [
    {
      id: "vision",
      text: "We don't follow trends. We create artifacts. Digital experiences that feel tangible, imperfect, and human.",
      bgColor: "#3D3E40",
      textColor: "#F2D8CE",
      accentColor: "#D9BEA7",
      bgImageUrl: "/images/class.jpeg",
    },
    {
      id: "process",
      text: "Hand-crafted algorithms and deliberate imperfections. We believe the best work happens in the margins.",
      bgColor: "#D9BEA7",
      textColor: "#3D3E40",
      accentColor: "#A60311",
      bgImageUrl: "/images/draw.jpeg",
    },
    {
      id: "impact",
      text: "Creating ripples that last. Our work isn't meant to be consumed and forgotten. It's meant to be felt.",
      bgColor: "#F2D8CE",
      textColor: "#3D3E40",
      accentColor: "#A60311",
      bgImageUrl: "/images/siluette.jpeg",
    },
  ];

  return (
    <main className="size-full font-mono bg-[#3D3E40]">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 p-6 pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex justify-between items-start pointer-events-auto">
          <div className="w-24 md:w-28 border-4 border-[#F2D8CE]">
            <img
              src="images/vv-logo.png"
              alt="logo"
              className="size-full object-contain"
            />
          </div>
        </div>
      </nav>

      {/* Sections */}
      {sections.map((section, index) => (
        <Section key={section.id} index={index} {...section} />
      ))}

      {/* Footer */}
      <footer className="bg-[#D9BEA7] text-[#3D3E40] py-10 px-8 border-t-[12px] border-[#3D3E40]">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end gap-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
              cosplay drawing classes.
            </h2>

            {/* Container for the text + inline instagram link */}
            <p className="text-lg md:text-xl opacity-80 font-medium leading-relaxed">
              hosted by victoria art sydney. find the next available date on
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap group inline-flex items-center gap-3 ml-2 align-middle transition-all hover:opacity-100"
              >
                <span className="decoration-2">instagram</span>
                <div className="p-2 border-2 border-[#3D3E40] rounded-lg group-hover:bg-[#3D3E40] group-hover:text-[#F2D8CE] transition-colors">
                  <Instagram size={20} />
                </div>
              </a>
            </p>
          </div>
        </div>
        {/* Copyright stays pushed to the right/bottom */}
        <div className="w-full md:w-auto flex justify-center pt-10">
          <div className="text-md tracking-[0.4em] opacity-40 text-center md:text-right">
            narbone.com © 2026
          </div>
        </div>
      </footer>
    </main>
  );
}
