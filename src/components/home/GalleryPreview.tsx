"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const gallery = [
  {
    id: 1,
    image: "/images/gallery/deluxe.jpg",
    title: "Luxury Suite",
  },
  {
    id: 2,
    image: "/images/rooms/fred.JPG",
    title: "Reception",
  },
  {
    id: 3,
    image: "/images/gallery/suite.jpeg",
    title: "Swimming Pool",
  },
  {
    id: 4,
    image: "/images/gallery/gallery4.jpg",
    title: "Restaurant",
  },
  {
    id: 5,
    image: "/images/gallery/gallery5.jpg",
    title: "Executive Room",
  },
  {
    id: 6,
    image: "/images/gallery/gallery6.jpg",
    title: "Garden View",
  },
];

export default function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF37] text-sm">
            Gallery
          </p>

          <h2 className="mt-3 text-5xl font-bold text-slate-900">
            Explore Rob's Finder
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-8">
            Discover our elegant rooms, beautiful surroundings, and premium
            facilities designed to make every stay unforgettable.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {gallery.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative h-80 overflow-hidden rounded-3xl shadow-xl"
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition" />

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-white/80">
                  Discover the elegance and comfort of our guest house.
                </p>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="mt-14 text-center">

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-8 py-4 text-white transition hover:bg-[#1E3A8A]"
          >
            View Full Gallery
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}