"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Message = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

export default function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadMessages() {
    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("LOAD ERROR:", error);
      return;
    }

    if (data) setMessages(data);
  }

  useEffect(() => {
    loadMessages();
  }, []);

  async function sendMessage() {
    if (!name.trim() || !message.trim()) {
      alert("Lütfen adınızı ve mesajınızı yazın.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("guestbook")
      .insert([
        {
          name,
          message,
        },
      ])
      .select();

    setLoading(false);

    if (error) {
      console.error("INSERT ERROR:", error);
      alert(error.message);
      return;
    }

    console.log("INSERT OK:", data);

    setName("");
    setMessage("");

    loadMessages();
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-2">
        💌 Anı Defteri
      </h2>

      <p className="text-center text-gray-500 mb-8">
        Bu özel günümüzde bize küçük bir not bırakabilirsiniz.
      </p>

      <input
        className="w-full border rounded-xl p-3 mb-3"
        placeholder="Adınız"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        className="w-full border rounded-xl p-3 h-32 mb-3"
        placeholder="Mesajınız"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="w-full rounded-xl bg-black p-3 text-white"
      >
        {loading ? "Gönderiliyor..." : "Mesajı Gönder"}
      </button>

      <div className="mt-10 space-y-4">
        {messages.map((item) => (
          <div key={item.id} className="rounded-xl border p-5 shadow-sm">
            <div className="font-bold">{item.name}</div>

            <div className="mt-2">{item.message}</div>

            <div className="mt-3 text-xs text-gray-400">
              {new Date(item.created_at).toLocaleString("tr-TR")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}