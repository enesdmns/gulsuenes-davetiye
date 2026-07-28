"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  const [show, setShow] = useState(true);
  const [opening, setOpening] = useState(false);

  const openInvitation = () => {
    setOpening(true);

    setTimeout(() => {
      onStart();
      setShow(false);
    }, 1400);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#090909]"
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: opening ? 1.7 : 1,
              opacity: opening ? 0.7 : 0.25,
            }}
            transition={{ duration: 1.4 }}
            className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 blur-[170px]"
          />

          {/* Particles */}
          {[...Array(18)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-yellow-300"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                y: [0, -25, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + Math.random() * 3,
              }}
            />
          ))}

          {/* Card */}
          <motion.div
            animate={{
              scale: opening ? 1.18 : 1,
              opacity: opening ? 0 : 1,
            }}
            transition={{ duration: 1.2 }}
            className="absolute left-1/2 top-1/2 w-[92%] max-w-xl -translate-x-1/2 -translate-y-1/2"
          >
            <div className="rounded-[36px] border border-yellow-600/40 bg-white/5 p-12 text-center backdrop-blur-xl shadow-[0_0_80px_rgba(212,175,55,.15)]">

              <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-yellow-500/50">
                <span
                  className="text-5xl text-yellow-300"
                  style={{ fontFamily: "serif" }}
                >
                  G&E
                </span>
              </div>

              <p className="mb-3 tracking-[8px] text-yellow-400 uppercase text-sm">
                YENİ BİR HİKÂYE BAŞLIYOR
              </p>

              <h1
                className="text-5xl text-white"
                style={{ fontFamily: "serif" }}
              >
                Gülsu
                <span className="mx-4 text-yellow-400">&</span>
                Enes
              </h1>

              <div className="mx-auto my-8 h-px w-36 bg-yellow-500/70" />

              <p className="tracking-[6px] uppercase text-white/60">
                28 Ağustos 2026
              </p>

              <p className="mt-8 leading-8 text-white/70">
                Hayatımızın en özel gününe
                <br />
                hoş geldiniz.
              </p>

              {!opening && (
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 35px rgba(255,215,0,.35)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  onClick={openInvitation}
                  className="mt-12 rounded-full border border-yellow-500 px-10 py-4 text-yellow-300 transition"
                >
                  ✨ Davetiyeyi Aç
                </motion.button>
              )}
            </div>
          </motion.div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,.7)_100%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}