"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles, Heart } from "lucide-react";

export default function PhotoUpload() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f2] py-24 px-6">

      {/* Arka plan ışık efekti */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d6b36a]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="rounded-[36px] border border-[#e6d8b6] bg-white/90 p-10 shadow-2xl backdrop-blur">

          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#b99033] shadow-lg">
              <Camera size={34} className="text-white" />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Sparkles className="text-[#c8a24d]" />
          </div>

          <h2 className="mt-4 text-center text-4xl font-serif text-[#3f3325]">
            Anılarımızı Birlikte Biriktirelim
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-[17px] leading-8 text-[#6f6558]">
            Bu özel günümüzde yakaladığınız en güzel kareleri ve videoları
            bizimle paylaşabilirsiniz.
            <br />
            Her yüklediğiniz anı, yıllar sonra dönüp tebessüm edeceğimiz
            albümümüzün bir parçası olacak. 🤍
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfTACtW74x2WhuDfAkERpexBOiHDtc0AYCdkInVqay8E521tA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#d4af37] to-[#b99033] px-10 py-5 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-700 group-hover:translate-x-full"></span>

              <Camera
                size={22}
                className="relative transition group-hover:rotate-12"
              />

              <span className="relative">
                Fotoğraf & Video Yükle
              </span>
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-[#b99033]">
            <Heart size={18} fill="currentColor" />
            <p className="text-sm">
              Yükleme Google Form üzerinden güvenli şekilde gerçekleştirilecektir.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}