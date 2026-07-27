"use client";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center md:scale-105"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/85" />

      {/* Content */}
      <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[6px] text-white/80 sm:text-sm sm:tracking-[10px]"
        >
          Nişan Davetiyesi
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-5xl leading-none text-white sm:text-6xl md:text-7xl lg:text-[10rem]"
        >
          Enes
        </motion.h1>

        <div className="my-4 h-px w-20 bg-[#D4AF37]/70" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl text-[#D4AF37] sm:text-4xl md:text-5xl"
        >
          &
        </motion.div>

        <div className="my-4 h-px w-20 bg-[#D4AF37]/70" />

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl leading-none text-white sm:text-6xl md:text-7xl lg:text-[10rem]"
        >
          Gülsu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 max-w-xl text-lg text-white/90 sm:text-xl md:text-2xl"
        >
          Bir ömür mutluluğa ilk adım...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-5 text-sm uppercase tracking-[4px] text-[#D4AF37] sm:text-base sm:tracking-[8px]"
        >
          28 Ağustos 2026
        </motion.p>

        <motion.a
          href="#countdown"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="mt-10 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:px-8 sm:py-4 sm:text-base"
        >
          Davetiyeyi İncele
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-xl text-white sm:bottom-10 sm:text-2xl"
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
}