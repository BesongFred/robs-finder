"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-[#0F172A] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-[#D4AF37] to-[#f5d76e] px-8 py-16 text-center"
        >

          <h2 className="text-4xl font-bold text-[#0F172A] md:text-5xl">
            Ready for Your Perfect Stay?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-800">
            Experience comfort, luxury and exceptional hospitality
            with Rob's Finder.
          </p>


          <Link
            href="/booking"
            className="mt-8 inline-block rounded-full bg-[#0F172A] px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Book Your Stay
          </Link>

        </motion.div>

      </div>
    </section>
  );
}