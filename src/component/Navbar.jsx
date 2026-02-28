import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Experience", "Projects", "Contact"];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-[#00d2ff]/10 ${
        scrolled ? "py-3 shadow-lg" : "py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ================= LOGO IMAGE ================= */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex items-center gap-2"
        >
          <img
            src="/src/assets/RD Logo-02.svg"
            alt="Rishabh Logo"
            className="w-25 h-10 object-contain"
          />
        </motion.div>

        {/* ================= DESKTOP LINKS ================= */}
        <ul className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.3em]">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-all"
              >
                {item}
              </a>
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#00d2ff] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00d2ff]" />
            </li>
          ))}
        </ul>

        {/* ================= ACTION BUTTON ================= */}
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#00d2ff",
            color: "#000",
            boxShadow: "0 0 15px rgba(0, 210, 255, 0.5)"
          }}
          className="hidden md:block px-6 py-2 border border-[#00d2ff] text-[#00d2ff] text-[10px] font-black rounded-full uppercase tracking-widest transition-all"
          onClick={() =>
            window.open(
              "https://wa.me/918689050229?text=Hi%20Rishabh,%20I%20would%20like%20to%20know%20more%20about%20this.",
              "_blank"
            )
          }
        >
          Hire Me
        </motion.button>

        {/* ================= MOBILE TOGGLE ================= */}
        <div className="md:hidden text-[#00d2ff]">
          {open ? (
            <HiX size={28} onClick={() => setOpen(false)} />
          ) : (
            <HiMenuAlt3 size={28} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-[#00d2ff]/20"
          >
            <ul className="flex flex-col gap-6 px-10 py-10 text-gray-300 text-xs font-bold uppercase tracking-widest">
              {navItems.map((item) => (
                <li key={item} onClick={() => setOpen(false)}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#00d2ff] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}