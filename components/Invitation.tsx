"use client";

import { motion } from "framer-motion";

export default function Invitation() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[6px] text-[#D4AF37] sm:text-sm sm:tracking-[8px]"
        >
          DAVET
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-5 text-4xl font-light leading-tight text-[#2B2B2B] sm:text-5xl md:text-6xl"
        >
          Mutluluğumuza
          <br />
          Ortak Olun
        </motion.h2>

        <div className="mx-auto my-8 h-px w-24 bg-[#D4AF37]/60" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-base leading-8 text-gray-600 sm:text-lg sm:leading-9 md:text-xl md:leading-10"
        >
          Hayatımızın en özel günlerinden birinde sizleri de
          aramızda görmekten büyük mutluluk duyacağız.
          <br />
          <br />
          Sevincimizi birlikte paylaşmanız,
          bu anlamlı günü bizim için daha da unutulmaz kılacaktır.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <p className="text-lg italic text-[#D4AF37] sm:text-xl">
            Sevgiyle...
          </p>

          <p className="mt-3 text-2xl font-light tracking-wide text-[#2B2B2B] sm:text-3xl">
            Enes & Gülsu
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}