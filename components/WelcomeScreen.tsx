"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaMusic } from "react-icons/fa";
import { useState } from "react";

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl text-white mb-4"
            >
              Enes ❤️ Gülsu
            </motion.h1>

            <p className="text-white/70 mb-10">
              28 Ağustos 2026
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              onClick={() => {
                setOpen(false);
                setTimeout(() => onStart(), 500);
              }}
              className="bg-yellow-400 text-black rounded-full px-8 py-4 flex items-center gap-3 mx-auto font-semibold"
            >
              <FaMusic />
              Davetiyeyi Aç
            </motion.button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}