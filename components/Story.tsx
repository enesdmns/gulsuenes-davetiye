"use client";

import { motion } from "framer-motion";

const photos = [
  "/images/story1.jpg",
  "/images/story2.jpg",
  "/images/story3.jpg",
];

export default function Story() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center text-5xl mb-20"
        >
          Hikayemiz
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {photos.map((photo,index)=>(

            <motion.img

              key={index}

              src={photo}

              whileHover={{scale:1.05}}

              className="rounded-3xl shadow-2xl"

            />

          ))}

        </div>

      </div>

    </section>
  );
}