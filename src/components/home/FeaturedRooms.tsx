"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Wifi,
  Coffee,
  Bath,
  ArrowRight,
} from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Luxury Suite",
    image: "/images/rooms/suite.jpg",
    price: "$180",
    guests: "2 Guests",
    description:
      "Elegant suite with panoramic views, king-size bed and premium amenities.",
    amenities: ["Free WiFi", "Breakfast", "Private Bathroom"],
  },
  {
    id: 2,
    name: "Executive Room",
    image: "/images/rooms/executive.jpg",
    price: "$140",
    guests: "2 Guests",
    description:
      "Perfect for business and leisure travelers seeking comfort and style.",
    amenities: ["Free WiFi", "Coffee", "Smart TV"],
  },
  {
    id: 3,
    name: "Deluxe Room",
    image: "/images/rooms/deluxe.jpg",
    price: "$110",
    guests: "2 Guests",
    description:
      "Modern room with luxury bedding and relaxing atmosphere.",
    amenities: ["Free WiFi", "Breakfast", "Luxury Bathroom"],
  },
];

export default function FeaturedRooms() {
  return (
    <section
      id="rooms"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#D4AF37] uppercase tracking-[5px] text-sm">
            Accommodation
          </p>

          <h2 className="text-5xl font-bold mt-3 text-slate-900">
            Luxury Rooms
          </h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
            Discover beautifully designed rooms crafted for relaxation,
            comfort and unforgettable experiences.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">

          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">

                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute top-5 left-5 bg-[#D4AF37] text-white px-4 py-2 rounded-full font-semibold">
                  {room.price}/night
                </div>

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-900">
                  {room.name}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {room.description}
                </p>

                <div className="flex items-center gap-2 mt-5 text-slate-700">
                  <Users size={18} />
                  {room.guests}
                </div>

                <div className="grid grid-cols-1 gap-3 mt-6">

                  <div className="flex items-center gap-3">
                    <Wifi
                      size={18}
                      className="text-[#D4AF37]"
                    />
                    <span>Free High-Speed WiFi</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Coffee
                      size={18}
                      className="text-[#D4AF37]"
                    />
                    <span>Complimentary Breakfast</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Bath
                      size={18}
                      className="text-[#D4AF37]"
                    />
                    <span>Luxury Bathroom</span>
                  </div>

                </div>

                <Link
                  href="/rooms"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-white transition hover:bg-[#1E3A8A]"
                >
                  View Details
                  <ArrowRight size={18} />
                </Link>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}