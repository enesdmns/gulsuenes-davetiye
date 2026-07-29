"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  const [show, setShow] = useState(true);
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      onStart();
      setShow(false);
    }, 1300);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-[#0b0b0b] overflow-hidden cursor-pointer"
          onClick={handleOpen}
        >
          {/* Arka plan ışığı */}
          <motion.div
            animate={{
              scale: opening ? 2 : 1,
              opacity: opening ? 0.5 : 0.15,
            }}
            transition={{ duration: 1.2 }}
            className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500 blur-[180px]"
          />

          {/* Sol perde */}
          <motion.div
            animate={{
              x: opening ? "-100%" : "0%",
            }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#090909] via-[#181818] to-[#262626] shadow-2xl"
          />

          {/* Sağ perde */}
          <motion.div
            animate={{
              x: opening ? "100%" : "0%",
            }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#090909] via-[#181818] to-[#262626] shadow-2xl"
          />

          {/* Ortadaki çizgi */}
          <motion.div
            animate={{
              opacity: opening ? 0 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
          />

          {/* İçerik */}
          <motion.div
            animate={{
              opacity: opening ? 0 : 1,
              scale: opening ? 0.9 : 1,
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <p className="tracking-[8px] uppercase text-yellow-400 text-sm mb-6">
              28 Ağustos 2026
            </p>

            <h1
              className="text-6xl md:text-7xl text-white"
              style={{ fontFamily: "serif" }}
            >
              Gülsu
            </h1>

            <div className="my-4 text-yellow-400 text-3xl">&</div>

            <h1
              className="text-6xl md:text-7xl text-white"
              style={{ fontFamily: "serif" }}
            >
              Enes
            </h1>

            <div className="w-40 h-px bg-yellow-500 my-10" />

            <p className="text-white/70 text-lg">
              Davetiyemizi görüntülemek için
            </p>

            <motion.p
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="mt-2 text-yellow-400 tracking-[4px] uppercase"
            >
              Dokunarak Başlayın
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}