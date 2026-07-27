"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const target = new Date("2026-08-28T19:00:00").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = Math.max(target - now, 0);

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  const cards = [
    { label: "Gün", value: time.days },
    { label: "Saat", value: time.hours },
    { label: "Dakika", value: time.minutes },
    { label: "Saniye", value: time.seconds },
  ];

  return (
    <section
      id="countdown"
      className="bg-[#F8F6F2] px-5 py-20 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[6px] text-[#D4AF37] sm:text-sm sm:tracking-[8px]"
        >
          DAVETE KALAN SÜRE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 mb-12 text-center text-4xl font-light text-[#2B2B2B] sm:text-5xl md:mb-16 md:text-6xl"
        >
          Geri Sayım
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl border border-[#E8E3D9] bg-white/90 px-4 py-8 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl font-semibold tabular-nums text-[#D4AF37] sm:text-5xl md:text-6xl">
                {String(card.value).padStart(2, "0")}
              </div>

              <div className="mt-4 text-[11px] uppercase tracking-[3px] text-gray-500 sm:text-xs sm:tracking-[4px]">
                {card.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl text-center text-sm leading-7 text-gray-500 sm:text-base"
        >
          Hayatımızın en özel gününe kalan zamanı birlikte sayıyoruz.
        </motion.div>
      </div>
    </section>
  );
}