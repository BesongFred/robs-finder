"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BedDouble, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gallery/hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 uppercase tracking-[6px] text-[#D4AF37]"
          >
            Welcome to Rob's Finder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Experience Comfort.
            <br />
            Experience Luxury.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-200"
          >
            Welcome to Rob's Finder Guest House, where exceptional hospitality,
            elegant rooms, and unforgettable experiences come together to create
            your perfect stay.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <Link
              href="/booking"
              className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#0F172A] transition hover:scale-105"
            >
              Book Your Stay
            </Link>

            <Link
              href="/rooms"
              className="rounded-xl border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black"
            >
              Explore Rooms
            </Link>
          </motion.div>

        </div>

        {/* Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
            <BedDouble className="mb-4 text-[#D4AF37]" size={34} />
            <h3 className="text-xl font-semibold text-white">
              Luxury Rooms
            </h3>
            <p className="mt-2 text-slate-200">
              Elegant accommodation designed for complete relaxation.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
            <Star className="mb-4 text-[#D4AF37]" size={34} />
            <h3 className="text-xl font-semibold text-white">
              5-Star Service
            </h3>
            <p className="mt-2 text-slate-200">
              Professional hospitality that exceeds every expectation.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
            <ShieldCheck className="mb-4 text-[#D4AF37]" size={34} />
            <h3 className="text-xl font-semibold text-white">
              Secure Booking
            </h3>
            <p className="mt-2 text-slate-200">
              Fast, safe and reliable online reservations.
            </p>
          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </motion.div>

    </section>
  );
}