"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import {
  Camera,
  Sparkles,
  Heart,
  Upload,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export default function PhotoUpload() {
  const [files, setFiles] = useState<File[]>([]);
const [guestName, setGuestName] = useState("");
const [loading, setLoading] = useState(false);
const [progress, setProgress] = useState(0);
const [success, setSuccess] = useState(false);

const inputRef = useRef<HTMLInputElement>(null);

const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files) return;

  setFiles(Array.from(e.target.files));
};

const uploadFiles = async () => {
  if (!files.length) {
    alert("Lütfen dosya seçiniz.");
    return;
  }

  if (!guestName.trim()) {
    alert("Lütfen isminizi giriniz.");
    return;
  }

  setLoading(true);
  setProgress(0);

  try {
for (let i = 0; i < files.length; i++) {
  const file = files[i];

  const extension = file.name.split(".").pop();

  const filePath = `${guestName.trim()}/${Date.now()}-${i}.${extension}`;

  const { error } = await supabase.storage
    .from("wedding-photos")
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  setProgress(Math.round(((i + 1) / files.length) * 100));
}
    setSuccess(true);
    setFiles([]);
    setGuestName("");
setProgress(100);

if (inputRef.current) {
  inputRef.current.value = "";
}
} catch (err) {
  console.error(err);

  if (err instanceof Error) {
    alert(err.message);
  } else {
    alert("Yükleme sırasında hata oluştu.");
  }
}
  setLoading(false);
};
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

<div className="mt-12">

  <input
    ref={inputRef}
    type="file"
    multiple
    accept="image/*,video/*"
    className="hidden"
    onChange={handleSelect}
  />

  <div
    onClick={() => inputRef.current?.click()}
    className="cursor-pointer rounded-3xl border-2 border-dashed border-[#d4af37] bg-[#fcfaf6] p-10 transition hover:bg-[#f8f3e8]"
  >
    <div className="flex flex-col items-center">

      <Upload className="mb-4 h-12 w-12 text-[#c79b2b]" />

      <h3 className="text-xl font-semibold text-[#4b3d2c]">
        Dosyalarınızı Seçin
      </h3>

      <p className="mt-2 text-center text-[#7a6b58]">
        Fotoğraf veya videolarınızı seçmek için buraya tıklayın.
      </p>

      {files.length > 0 && (
        <p className="mt-5 rounded-full bg-[#d4af37]/10 px-5 py-2 text-sm font-medium text-[#9b7621]">
          📸 {files.length} dosya seçildi
        </p>
      )}
    </div>
  </div>

  <input
    value={guestName}
    onChange={(e) => setGuestName(e.target.value)}
    placeholder="Adınız Soyadınız"
    className="mt-8 w-full rounded-2xl border border-[#e5d8b8] bg-white px-5 py-4 text-center text-lg outline-none transition focus:border-[#d4af37]"
  />

  {loading && (
    <div className="mt-8">

      <div className="mb-2 flex justify-between text-sm text-[#8c774f]">
        <span>Yükleniyor...</span>
        <span>%{progress}</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-[#efe7d7]">

        <div
          style={{ width: `${progress}%` }}
          className="h-full rounded-full bg-gradient-to-r from-[#d4af37] to-[#b99033] transition-all duration-500"
        />

      </div>

    </div>
  )}

  {success && (
    <div className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-green-50 p-5 text-green-700">

      <CheckCircle2 />

      <span>
        Fotoğraflarınız başarıyla yüklendi.
        Çok teşekkür ederiz. 🤍
      </span>

    </div>
  )}

  <button
    onClick={uploadFiles}
    disabled={loading}
    className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b99033] px-8 py-5 text-lg font-semibold text-white shadow-xl transition hover:scale-[1.02] disabled:opacity-60"
  >
    {loading ? (
      <>
        <Loader2 className="h-5 w-5 animate-spin" />
        Yükleniyor...
      </>
    ) : (
      <>
        <Upload className="h-5 w-5" />
        Fotoğraf & Video Yükle
      </>
    )}
  </button>

</div>

<div className="mt-10 flex items-center justify-center gap-2 text-[#b99033]">
  <Heart size={18} fill="currentColor" />
  <p className="text-sm text-center">
    Fotoğraf ve videolarınız güvenli şekilde yalnızca Enes & Gülsu tarafından görüntülenecektir.
  </p>
</div>       
 </div>
      </motion.div>
    </section>
  );
}