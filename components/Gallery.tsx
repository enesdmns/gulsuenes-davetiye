"use client";

const photos = [
  "/images/story1.jpg",
  "/images/story2.jpg",
  "/images/story3.jpg",
];

export default function Gallery() {
  return (
    <section className="py-28 bg-[#F8F6F2]">

      <h2 className="text-center text-5xl mb-16">
        Galeri
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
          />
        ))}

      </div>

    </section>
  );
}