import React from "react";
import { motion } from "framer-motion";
import { FaMagic, FaVideo } from "react-icons/fa";

const filmoraIcon = "https://img.icons8.com/color/512/filmora.png";
const premiereIcon =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/512px-Adobe_Premiere_Pro_CC_icon.svg.png";
const afterEffectsIcon =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/512px-Adobe_After_Effects_CC_icon.svg.png";

const experienceData = [
  {
    role: "Video Editor Trainee",
    company: "Creative Media Studio",
    year: "2023 – 2024",
    icon: <FaVideo />,
    side: "left",
    floatIcon: filmoraIcon,
    floatAlt: "Filmora",
    floatPosition: "right-[2%]",
    floatGlow: "drop-shadow-[0_0_40px_rgba(0,255,255,0.6)]",
    tasks: [
      "Learned professional editing workflows.",
      "Handled cuts & transitions.",
      "Assisted senior editors.",
      "Improved storytelling skills."
    ]
  },
  {
    role: "Junior Video Editor",
    company: "Content Production Agency",
    year: "2024 – 2025",
    icon: <FaVideo />,
    side: "right",
    floatIcon: premiereIcon,
    floatAlt: "Premiere Pro",
    floatPosition: "left-[2%]",
    floatGlow: "drop-shadow-[0_0_40px_rgba(157,0,255,0.6)]",
    tasks: [
      "Edited social media content.",
      "Applied advanced transitions.",
      "Collaborated with creators.",
      "Optimized audience retention."
    ]
  },
  {
    role: "Senior Video Editor & Motion Designer",
    company: "Freelance / Creative Studio",
    year: "2025 – Present",
    icon: <FaMagic />,
    side: "left",
    floatIcon: afterEffectsIcon,
    floatAlt: "After Effects",
    floatPosition: "right-[2%]",
    floatGlow: "drop-shadow-[0_0_40px_rgba(99,0,255,0.6)]",
    tasks: [
      "Created cinematic edits & VFX.",
      "Designed motion graphics.",
      "Led full post-production.",
      "Worked with global clients."
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative py-32 bg-[#050c0f] text-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-24">
          <h3 className="text-5xl font-bold uppercase tracking-wider
            bg-gradient-to-r from-cyan-400 to-blue-500
            bg-clip-text text-transparent">
            Experience
          </h3>
        </div>

        <div className="space-y-24 relative">

          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full
            bg-gradient-to-b from-cyan-400/50 to-transparent hidden md:block" />

          {experienceData.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-center ${
                exp.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* Floating Software Logo (NO RAY EFFECT HERE) */}
              <motion.img
                src={exp.floatIcon}
                alt={exp.floatAlt}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className={`hidden md:block absolute ${exp.floatPosition}
                  w-80 h-80 object-contain ${exp.floatGlow}`}
              />

              {/* Experience Card */}
              <div className="w-full md:w-[45%]">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative group p-8 rounded-xl
                    bg-white/5 backdrop-blur-lg
                    border border-cyan-500/10
                    hover:border-cyan-400/40
                    transition-all duration-500"
                >

                  {/* Thin Radiating Rays */}
                  <div className="absolute -inset-10 opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 pointer-events-none">

                    <div className="w-full h-full rounded-xl blur-2xl
                      bg-[conic-gradient(from_0deg,rgba(0,207,255,0.25),transparent_20%,rgba(0,87,255,0.25),transparent_40%,rgba(0,207,255,0.25),transparent_60%,rgba(0,87,255,0.25),transparent_80%,rgba(0,207,255,0.25))]"
                      style={{
                        animation: "pulseRays 4s ease-in-out infinite"
                      }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10">
                    <span className="text-sm text-gray-400">
                      {exp.year}
                    </span>

                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-cyan-400 text-xl">
                        {exp.icon}
                      </span>
                      <h4 className="text-2xl font-semibold">
                        {exp.role}
                      </h4>
                    </div>

                    <p className="text-cyan-400/70 text-sm mt-1 mb-6">
                      {exp.company}
                    </p>

                    <ul className="space-y-3">
                      {exp.tasks.map((task, index) => (
                        <li key={index} className="flex gap-3 text-gray-400 text-sm">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes pulseRays {
          0% { transform: scale(0.95); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}