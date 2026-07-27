"use client";

import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const items = [
  {
    icon: FaCalendarAlt,
    title: "Tarih",
    value: "28 Ağustos 2026",
  },
  {
    icon: FaClock,
    title: "Saat",
    value: "19:00",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Mekan",
    value: "OMTEL Marin Bahçe",
  },
];

export default function Event() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[6px] text-[#D4AF37] sm:text-sm sm:tracking-[8px]"
        >
          ETKİNLİK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 mb-12 text-center text-4xl font-light text-[#2B2B2B] sm:text-5xl md:mb-16 md:text-6xl"
        >
          Nişan Bilgileri
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-[#E8E3D9] bg-[#F8F6F2] p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10 sm:h-20 sm:w-20">
                  <Icon className="text-2xl text-[#D4AF37] sm:text-3xl" />
                </div>

                <h3 className="mt-6 text-2xl font-medium text-[#2B2B2B] sm:mt-8 sm:text-3xl">
                  {item.title}
                </h3>

                <div className="mx-auto my-5 h-px w-12 bg-[#D4AF37]/60" />

                <p className="text-base leading-7 text-gray-600 sm:text-lg">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl text-center text-sm leading-7 text-gray-500 sm:text-base"
        >
          Bu anlamlı gecede sizleri de aramızda görmekten büyük mutluluk
          duyacağız.
        </motion.p>
      </div>
    </section>
  );
}