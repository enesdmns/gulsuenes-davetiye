"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaMusic, FaPause, FaPlay } from "react-icons/fa";

interface MusicPlayerProps {
  start: boolean;
}

export default function MusicPlayer({ start }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!start) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 30;
    audio.volume = 0.35;

    audio
      .play()
      .then(() => setPlaying(true))
      .catch((err) => {
        console.log("Müzik başlatılamadı:", err);
      });
  }, [start]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/our-song.mp3" type="audio/mpeg" />
      </audio>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
      >
        <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-black/45 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5 sm:py-4">
          
          <motion.div
            animate={playing ? { rotate: 360 } : { rotate: 0 }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "linear",
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37]/15"
          >
            <FaMusic className="text-lg text-[#D4AF37]" />
          </motion.div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">
              Bizim Şarkımız
            </p>

            <p className="text-xs text-white/60">
              Enes & Gülsu
            </p>
          </div>

          <button
            onClick={toggleMusic}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37] text-black transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {playing ? <FaPause size={14} /> : <FaPlay size={14} />}
          </button>
        </div>
      </motion.div>
    </>
  );
}