import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Text Animation Variants
const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { ease: "easeOut", duration: 0.3 },
  },
};

const AnimatedText = ({ text }) => (
  <motion.div
    className="text-lg md:text-2xl leading-relaxed text-gray-300 font-bold uppercase tracking-tight flex flex-wrap justify-center md:justify-start"
    variants={containerVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
  >
    {text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={wordVariant}
        className="inline-block mr-2 hover:text-[#00d2ff] transition-all duration-300 cursor-default"
      >
        {word}
      </motion.span>
    ))}
  </motion.div>
);

// Timecode that ticks up at 30fps
const useTimecode = () => {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % (30 * 60 * 60)), 1000 / 30);
    return () => clearInterval(id);
  }, []);
  const ff = frame % 30;
  const ss = Math.floor(frame / 30) % 60;
  const mm = Math.floor(frame / 30 / 60) % 60;
  const hh = Math.floor(frame / 30 / 60 / 60);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;
};

// NLE Timeline HUD — sized to match the text section
const TimelineHUD = () => {
  const timecode = useTimecode();

  const tracks = [
    { label: "V3", color: "#00d2ff", blocks: [{ start: 5, width: 40 }, { start: 55, width: 30 }] },
    { label: "V2", color: "#00aacc", blocks: [{ start: 0, width: 25 }, { start: 35, width: 50 }] },
    { label: "V1", color: "#007fa0", blocks: [{ start: 0, width: 100 }] },
    { label: "A1", color: "#005f7a", blocks: [{ start: 0, width: 80 }, { start: 85, width: 15 }] },
    { label: "A2", color: "#004a60", blocks: [{ start: 10, width: 60 }] },
  ];

  return (
    <div className="relative w-96 flex-shrink-0 flex flex-col gap-3 font-mono select-none">
      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-2 border border-[#00d2ff]/30 bg-[#00d2ff]/5">
        <span className="text-[#00d2ff]/60 text-[11px] tracking-widest uppercase">Timeline</span>
        <span className="text-[#00d2ff] text-xs tracking-widest animate-pulse">{timecode}</span>
      </div>

      {/* Track rows */}
      <div className="relative flex flex-col gap-[6px]">
        {tracks.map((track, ti) => (
          <div key={ti} className="flex items-center gap-3 h-14">
            {/* Track label */}
            <span
              className="text-[11px] w-6 text-right flex-shrink-0 font-bold"
              style={{ color: track.color }}
            >
              {track.label}
            </span>

            {/* Track lane */}
            <div className="relative flex-1 h-full bg-white/[0.03] border border-white/5 overflow-hidden">
              {track.blocks.map((block, bi) => (
                <motion.div
                  key={bi}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ti * 0.1 + bi * 0.15, duration: 0.5, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    left: `${block.start}%`,
                    width: `${block.width}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, ${track.color}33, ${track.color}15)`,
                    borderLeft: `2px solid ${track.color}`,
                    transformOrigin: "left",
                  }}
                >
                  {/* Waveform bars for audio tracks */}
                  {(track.label === "A1" || track.label === "A2") && (
                    <div className="absolute inset-0 flex items-center justify-around px-1">
                      {Array.from({ length: Math.floor(block.width / 5) }).map((_, i) => (
                        <div
                          key={i}
                          className="w-px"
                          style={{
                            height: `${20 + Math.sin(i * 1.7) * 60}%`,
                            background: track.color,
                            opacity: 0.6,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Animated red playhead */}
        <motion.div
          className="absolute top-0 bottom-0 w-px z-10 pointer-events-none"
          style={{ background: "#ff4444", boxShadow: "0 0 8px #ff4444" }}
          animate={{ left: ["7%", "93%", "7%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-3 h-3 bg-[#ff4444] rotate-45 -translate-x-[5px] -translate-y-1" />
        </motion.div>
      </div>

      {/* Bottom transport controls */}
      <div className="flex items-center justify-between px-3 py-2 border border-[#00d2ff]/20 bg-black/40">
        {["◼", "◁", "▶", "▷", "◼◼"].map((icon, i) => (
          <span
            key={i}
            className="text-[#00d2ff]/40 text-xs hover:text-[#00d2ff] cursor-pointer transition-colors"
          >
            {icon}
          </span>
        ))}
        <span className="text-[#00d2ff]/30 text-[9px] tracking-widest">29.97fps</span>
      </div>

      {/* Corner accents */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#00d2ff]" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#00d2ff]" />
    </div>
  );
};

export default function About() {
  const paragraph = `
  Hello, I'm Rishabh Dixit, a passionate video editor specializing in transforming raw footage into compelling visual stories across podcasts, promotional content, YouTube videos, and Instagram shorts. Proficient in Adobe Premiere Pro, After Effects, and Illustrator, I focus on clean editing, cinematic color grading, sound design, and motion graphics to elevate every project. I believe in strong collaboration and work closely with clients to bring their vision to life with creativity, precision, and professionalism.
  `;

  return (
    <section
      id="about"
      className="relative py-20 px-6 overflow-hidden bg-[#050505] border-t border-b border-[#00d2ff]/20"
    >
      {/* CYBER BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d2ff10_1px,transparent_1px),linear-gradient(to_bottom,#00d2ff10_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#00d2ff]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">

        {/* LEFT: NLE Timeline HUD */}
        <TimelineHUD />

        {/* RIGHT: Text Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-8 relative group"
          >
            <h3 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-tighter group-hover:skew-x-[-10deg] transition-all duration-300">
              About <span className="text-[#00d2ff] drop-shadow-[0_0_10px_#00d2ff]">Me</span>
            </h3>
            <div className="h-1 w-32 bg-[#00d2ff] mt-2 shadow-[0_0_15px_#00d2ff]" />
          </motion.div>

          <div className="relative p-8 md:p-12 border border-[#00d2ff]/20 bg-gradient-to-br from-[#00d2ff]/5 to-transparent backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00d2ff]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00d2ff]" />

            <AnimatedText text={paragraph} />

            <div className="mt-12 flex items-center gap-6">
              <div className="flex-1 h-[2px] bg-[#00d2ff]/10 overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full bg-[#00d2ff]"
                />
              </div>
              <span className="text-[#00d2ff] font-mono text-xs tracking-widest animate-pulse">
                0% ———— 100%
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}