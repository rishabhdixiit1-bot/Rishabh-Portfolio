import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="relative w-full py-28 px-6 text-white text-center bg-[#050c0f] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl" />

      {/* Heading */}
      <motion.h2
        className="relative text-4xl md:text-5xl font-bold mb-6 tracking-widest uppercase text-cyan-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Resume
      </motion.h2>

      {/* Description */}
      <motion.p
        className="relative max-w-2xl mx-auto text-gray-300 mb-10 text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Download my resume to explore my professional experience, creative skills, and work as a video editor, including cinematic edits, storytelling, color grading, and brand-focused content.
      </motion.p>

      {/* Download Button */}
      <motion.a
        href="/resume.pdf" // Make sure resume.pdf is in public folder
        download="Rishabh-Video-Editor-Resume.pdf"
        className="relative inline-flex items-center justify-center px-12 py-3 rounded-full bg-cyan-400 text-black font-medium hover:bg-cyan-300 hover:scale-105 transition duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        Download Resume
      </motion.a>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 shadow-[0_0_20px_rgba(0,255,200,0.7)]" />
    </section>
  );
}