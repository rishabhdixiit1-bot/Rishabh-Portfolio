import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden pt-30 px-6 md:px-20 pb-20">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/10 blur-[120px] rounded-full" />

      <div className="z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* LEFT SIDE */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#00d2ff] text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
            Portfolio
          </h2>

          <div className="h-[4px] w-24 bg-[#00d2ff] my-6 shadow-[0_0_15px_#00d2ff] mx-auto md:mx-0" />

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
            I specialize in crafting <span className="text-white">high-impact visual stories</span>. 
            From cinematic transitions to professional color grading, I bring your 
            creative vision to life with precision and motion magic.
          </p>
          
          <div className="mt-8 flex gap-8 justify-center md:justify-start">
            <div>
              <p className="text-white font-bold text-2xl">50+</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest">Projects Done</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">3+</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest">Years Exp.</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div 
          className="flex-1 flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#00d2ff] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-duration-500" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#00d2ff] overflow-hidden shadow-[0_0_30px_rgba(0,210,255,0.3)]">
              <img 
                src='/assets/RISHABH.jpeg'
                alt="Rishabh Dixit"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="mt-8 text-center">
            <h1
              className="text-4xl md:text-5xl font-black uppercase tracking-tight"
              style={{
                color: "#FFFFFF",
                textShadow: "0 0 8px rgba(0,229,255,0.7), 0 0 18px rgba(0,229,255,0.5)",
                letterSpacing: "1px",
              }}
            >
              RISHABH DIXIT
            </h1>

            <p className="text-[#00d2ff] font-bold tracking-[0.2em] mt-2 text-sm md:text-base">
              Professional Video Editor & <br className="md:hidden"/> Motion Graphic Artist
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            
            {/* Hire Me */}
            <motion.button
              onClick={() =>
                window.open(
                  "https://wa.me/918689050229?text=Hi%20Rishabh,%20I%20would%20like%20to%20know%20more%20about%20this.",
                  "_blank"
                )
              }
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00d2ff" }}
              className="px-8 py-3 bg-[#00d2ff] text-black font-black text-xs rounded-full uppercase tracking-widest"
            >
              Hire Me
            </motion.button>

            {/* View Resume (Opens 4shared Link in New Tab) */}
            <a 
              href="public/RISHABH_DIXIT_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-8 py-3 border-2 border-[#00d2ff] text-white font-black text-xs rounded-full uppercase tracking-widest"
              >
                View Resume
              </motion.button>
            </a>

          </div>

          {/* Social Icons */}
          <div className="mt-16 flex justify-center gap-10">
            <a href="mailto:rishabhdixiit1@gmail.com">
              <SiGmail className="text-4xl text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)] hover:scale-125 transition" />
            </a>

            <a href="https://www.instagram.com/rishabhdixitt" target="_blank" rel="noreferrer">
              <FaInstagram className="text-4xl text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)] hover:scale-125 transition" />
            </a>

            <a href="https://www.linkedin.com/in/rishabh-dixit-9328712b7" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-4xl text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] hover:scale-125 transition" />
            </a>

            <a
              onClick={() =>
                window.open(
                  "https://wa.me/918689050229?text=Hi%20Rishabh,%20I%20would%20like%20to%20know%20more%20about%20this.",
                  "_blank"
                )
              }
            >
              <FaWhatsapp className="text-4xl text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.6)] hover:scale-125 transition" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}