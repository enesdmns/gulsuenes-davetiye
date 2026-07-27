"use client";

import { motion } from "framer-motion";
import { FaLocationArrow, FaMapMarkedAlt } from "react-icons/fa";

export default function Map() {
  return (
    <section className="bg-[#F8F6F2] px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[6px] text-[#D4AF37] sm:text-sm sm:tracking-[8px]"
        >
          KONUM
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 mb-4 text-center text-4xl font-light text-[#2B2B2B] sm:text-5xl md:mb-6 md:text-6xl"
        >
          OMTEL Marin Bahçe
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-xl text-center text-sm leading-7 text-gray-500 sm:text-base"
        >
          Sizleri bu özel günümüzde OMTEL Marin Bahçe'de ağırlamaktan büyük
          mutluluk duyacağız.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-[#E8E3D9] bg-white shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps?q=OMTEL+Marin+Bahçe+Samsun&output=embed"
            className="h-[320px] w-full md:h-[500px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://maps.app.goo.gl/SpbnCdcQxZPsLfvq7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:w-auto"
          >
            <FaLocationArrow />
            Yol Tarifi Al
          </a>

          <a
            href="https://maps.app.goo.gl/SpbnCdcQxZPsLfvq7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-[#D4AF37] px-8 py-4 text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-white sm:w-auto"
          >
            <FaMapMarkedAlt />
            Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}