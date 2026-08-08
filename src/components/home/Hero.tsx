"use client";

import HomeWelcome from "@/components/home/HomeWelcome";
import Link from "next/link";
import { motion } from "framer-motion";
import { BedDouble, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050B18]">

      {/* Gemini-style dark blue background */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#050B18]">

        {/* Base background */}
        <div className="absolute inset-0 bg-[#050B18]" />

        {/* Top-left blue glow */}
       {/* Gemini-style multicolor background */}
<div className="absolute inset-0 -z-10 overflow-hidden bg-[#030712]">

  {/* Base */}
  <div className="absolute inset-0 bg-[#030712]" />

  {/* Dark green glow - left middle */}
  <div
    className="
      absolute
      left-[-180px]
      top-[25%]
      h-[650px]
      w-[650px]
      rounded-full
      bg-emerald-900/35
      blur-[150px]
    "
  />

  {/* Green glow - center */}
  <div
    className="
      absolute
      left-[20%]
      top-[35%]
      h-[500px]
      w-[500px]
      rounded-full
      bg-green-700/20
      blur-[140px]
    "
  />

  {/* Main blue center glow */}
  <div
    className="
      absolute
      left-1/2
      top-[30%]
      h-[600px]
      w-[750px]
      -translate-x-1/2
      rounded-full
      bg-blue-600/25
      blur-[160px]
    "
  />

  {/* Purple glow - upper right */}
  <div
    className="
      absolute
      right-[-180px]
      top-[-120px]
      h-[600px]
      w-[600px]
      rounded-full
      bg-purple-700/20
      blur-[150px]
    "
  />

  {/* Cyan glow - right middle */}
  <div
    className="
      absolute
      right-[-150px]
      top-[40%]
      h-[550px]
      w-[550px]
      rounded-full
      bg-cyan-600/15
      blur-[150px]
    "
  />

  {/* Deep blue bottom glow */}
  <div
    className="
      absolute
      bottom-[-300px]
      left-1/2
      h-[650px]
      w-[850px]
      -translate-x-1/2
      rounded-full
      bg-blue-800/20
      blur-[170px]
    "
  />

  {/* Soft dark overlay */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-[#020617]/40
      via-transparent
      to-[#020617]/80
    "
  />

</div>

        {/* Soft overall gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-[#050B18]/60 to-[#050B18]" />

      </div>

      {/* Welcome component */}
      <HomeWelcome />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">

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
              className="rounded-xl border border-white/70 px-8 py-4 text-white transition hover:bg-white hover:text-black"
            >
              Explore Rooms
            </Link>

          </motion.div>

        </div>

        {/* Floating feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <BedDouble
              className="mb-4 text-[#D4AF37]"
              size={34}
            />

            <h3 className="text-xl font-semibold text-white">
              Luxury Rooms
            </h3>

            <p className="mt-2 text-slate-200">
              Elegant accommodation designed for complete relaxation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <Star
              className="mb-4 text-[#D4AF37]"
              size={34}
            />

            <h3 className="text-xl font-semibold text-white">
              5-Star Service
            </h3>

            <p className="mt-2 text-slate-200">
              Professional hospitality that exceeds every expectation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <ShieldCheck
              className="mb-4 text-[#D4AF37]"
              size={34}
            />

            <h3 className="text-xl font-semibold text-white">
              Secure Booking
            </h3>

            <p className="mt-2 text-slate-200">
              Fast, safe and reliable online reservations.
            </p>
          </div>

        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/60">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </motion.div>

    </section>
  );
}