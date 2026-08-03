"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "Luxury Rooms",
  },
  {
    number: "500+",
    label: "Happy Guests",
  },
  {
    number: "5★",
    label: "Guest Rating",
  },
  {
    number: "24/7",
    label: "Customer Support",
  },
];

export default function StatsCounter() {
  return (
    <section className="bg-[#0F172A] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h3 className="text-4xl font-bold text-[#D4AF37]">
              {stat.number}
            </h3>

            <p className="mt-3 text-gray-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}