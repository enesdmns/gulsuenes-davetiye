"use client";

import { motion } from "framer-motion";
import {
  FaGoogle,
  FaApple,
  FaCalendarAlt,
  FaCalendarDay,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Calendar() {
  const googleUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=Enes+%26+G%C3%BCls%C3%BC+Ni%C5%9Fan%C4%B1" +
    "&dates=20260828T160000Z/20260828T200000Z" +
    "&details=Sizleri+ni%C5%9Fan+t%C3%B6renimize+bekliyoruz." +
    "&location=OMTEL+Marin+Bah%C3%A7e,+Samsun";

  return (
    <section className="bg-[#FAF7F2] px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[6px] text-[#D4AF37] sm:text-sm sm:tracking-[8px]"
        >
          TAKVİM
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-4xl font-light text-[#2B2B2B] sm:text-5xl md:text-6xl"
        >
          Takviminize Ekleyin
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-gray-500 sm:text-base"
        >
          Bu özel günü kaçırmamanız için etkinliği tek dokunuşla
          takviminize ekleyebilirsiniz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl border border-[#E8E3D9] bg-white p-8 shadow-xl sm:p-10"
        >
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/10">
                <FaCalendarDay className="text-[#D4AF37]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">Tarih</p>
                <p className="font-medium text-[#2B2B2B]">
                  28 Ağustos 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/10">
                <FaClock className="text-[#D4AF37]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">Saat</p>
                <p className="font-medium text-[#2B2B2B]">
                  19:00 - 23:00
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/10">
                <FaMapMarkerAlt className="text-[#D4AF37]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">Mekan</p>
                <p className="font-medium text-[#2B2B2B]">
                  OMTEL Marin Bahçe
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#D4AF37] px-6 py-4 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <FaGoogle />
              Google
            </a>

            <a
              href="/Enes-Gulsu-Nisan.ics"
              download
              className="flex items-center justify-center gap-3 rounded-2xl border border-[#D4AF37] px-6 py-4 text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-white"
            >
              <FaApple />
              Apple
            </a>

            <a
              href="/Enes-Gulsu-Nisan.ics"
              download
              className="flex items-center justify-center gap-3 rounded-2xl border border-[#D4AF37] px-6 py-4 text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-white"
            >
              <FaCalendarAlt />
              Outlook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}