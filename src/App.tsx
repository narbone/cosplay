/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Instagram } from "lucide-react";

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
  gradient,
  textColor,
  accentColor,
  id,
  index,
}) => {
  return (
    <section
      id={id}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-mono"
      style={{
        backgroundColor: bgColor,
        background: gradient || bgColor,
        color: textColor,
      }}
    >
      {/* Background Image */}
      {bgImageUrl && (
        <>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${bgImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 z-0 bg-black/40" />
        </>
      )}

      <div className="absolute inset-0 w-full h-full max-w-[1600px] mx-auto z-10 pointer-events-none">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`absolute pointer-events-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-auto md:translate-x-0 md:translate-y-0 ${
            index === 0
              ? "md:bottom-auto md:top-12 md:right-12 lg:right-24 md:left-auto"
              : index === 1
                ? "md:top-auto md:bottom-12 md:left-12 lg:left-24 md:right-auto"
                : "md:top-auto md:bottom-12 md:right-12 lg:right-24 md:left-auto"
          }`}
        >
          <div
            className="p-6 md:p-8 backdrop-blur-md border-2 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] mx-auto md:mx-0 max-w-[320px] md:max-w-[400px]"
            style={{
              backgroundColor: `${bgColor}cc`,
              borderColor: accentColor,
              color: textColor,
            }}
          >
            <span
              className="text-[10px] font-bold tracking-widest opacity-60 block mb-3 text-center md:text-left"
              style={{ color: accentColor }}
            >
              section 0{index + 1}
            </span>
            <p className="text-xs md:text-sm leading-relaxed italic text-center md:text-left">
              {text}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">
        <ArrowDown size={32} strokeWidth={1} className="animate-bounce" />
      </div>
    </section>
  );
};

export default function App() {
  const sections = [
    {
      id: "vision",
      text: "We don't follow trends. We create artifacts. Digital experiences that feel tangible, imperfect, and human. Stripping away the corporate polish to reveal the soul of the project.",
      bgColor: "#3D3E40", // Charcoal
      textColor: "#F2D8CE", // Peach
      accentColor: "#D9BEA7", // Light Tan
      bgImageUrl: "/images/class.jpeg",
    },
    {
      id: "process",
      text: "Hand-crafted algorithms and deliberate imperfections. We believe the best work happens in the margins. A process that values intuition over metrics.",
      bgColor: "#D9BEA7", // Fallback Tan
      textColor: "#F2D8CE", // Changed to Peach for better contrast on dark gradient
      accentColor: "#BFBDB8", // Light Gray
      bgImageUrl: "/images/draw.jpeg",
    },
    {
      id: "impact",
      text: "Creating ripples that last. Our work isn't meant to be consumed and forgotten. It's meant to be felt. A digital resonance that lingers long after the tab is closed.",
      bgColor: "#F2D8CE", // Fallback Peach
      textColor: "#3D3E40", // Charcoal
      accentColor: "#A60311", // Deep Red
      bgImageUrl: "/images/siluette.jpeg",
    },
  ];

  return (
    <main className="w-full font-mono selection:bg-yellow selection:text-charcoal">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center">
        <div className="w-32 h-auto">
          <img
            src="images/vv-logo.png"
            alt="logo"
            className="w-full h-full rounded-md"
            referrerPolicy="no-referrer"
          />
        </div>
      </nav>

      {/* Sections */}
      {sections.map((section, index) => (
        <Section key={section.id} index={index} {...section} />
      ))}

      {/* Footer */}
      <footer
        className="text-charcoal py-24 px-8 border-t-8 border-charcoal"
        style={{
          background:
            "linear-gradient(135deg, #3D3E40 0%, #A6886D 25%, #D9BEA7 50%, #733B1A 75%, #F2D8CE 100%)",
        }}
      >
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-4">
            <div className="text-8xl font-display leading-none text-charcoal">
              indie.
            </div>
            <p className="text-sm opacity-70 max-w-xs">
              Built with intention. No trackers. No fluff. Just the work.
            </p>
          </div>

          <div className="flex flex-col items-end gap-6">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-xl hover:line-through transition-all"
            >
              <span>instagram</span>
              <div className="p-3 border-2 border-charcoal rounded-xl group-hover:bg-charcoal group-hover:text-peach group-hover:border-charcoal transition-all">
                <Instagram size={24} />
              </div>
            </a>
            <div className="text-[10px] tracking-[0.5em] opacity-50">
              © 2026 all rights reserved
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
