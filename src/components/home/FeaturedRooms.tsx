"use client";

import HomeWelcome from "@/components/home/HomeWelcome";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BedDouble,
  Star,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050B18]">

      {/* Gemini-style background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main background */}
        <div className="absolute inset-0 bg-[#050B18]" />

        {/* Top-left blue glow */}
        <div
          className="
            absolute
            -left-40
            -top-40
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-600/25
            blur-[140px]
          "
        />

        {/* Center indigo glow */}
        <div
          className="
            absolute
            left-1/2
            top-[25%]
            h-[600px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-indigo-600/20
            blur-[160px]
          "
        />

        {/* Right cyan glow */}
        <div
          className="
            absolute
            -right-40
            top-[15%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-cyan-500/15
            blur-[150px]
          "
        />

        {/* Bottom blue glow */}
        <div
          className="
            absolute
            bottom-[-300px]
            left-1/2
            h-[700px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-blue-700/20
            blur-[170px]
          "
        />

        {/* Overall gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-blue-950/40
            via-[#050B18]/50
            to-[#050B18]
          "
        />

      </div>

      {/* Welcome */}
      <HomeWelcome />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">

        <div className="max-w-3xl">

          {/* Small heading */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-4 uppercase tracking-[6px] text-[#D4AF37]"
          >
            Welcome to Rob's Finder
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="
              text-5xl
              font-bold
              leading-tight
              text-white
              md:text-7xl
            "
          >
            Experience Comfort.
            <br />
            <span className="text-[#D4AF37]">
              Experience Luxury.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            Welcome to Rob's Finder Guest House, where exceptional
            hospitality, elegant rooms, and unforgettable experiences
            come together to create your perfect stay.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="mt-10 flex flex-wrap gap-5"
          >

            <Link
              href="/booking"
              className="
                rounded-xl
                bg-[#D4AF37]
                px-8
                py-4
                font-semibold
                text-[#0F172A]
                shadow-lg
                shadow-[#D4AF37]/20
                transition
                duration-300
                hover:scale-105
                hover:bg-[#F1C75B]
              "
            >
              Book Your Stay
            </Link>

            <Link
              href="/rooms"
              className="
                rounded-xl
                border
                border-white/40
                bg-white/5
                px-8
                py-4
                text-white
                backdrop-blur-md
                transition
                duration-300
                hover:border-[#D4AF37]
                hover:bg-white/10
                hover:text-[#D4AF37]
              "
            >
              Explore Rooms
            </Link>

          </motion.div>

        </div>

        {/* Floating Cards */}
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {/* Luxury Rooms */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.07]
              p-6
              shadow-2xl
              backdrop-blur-xl
              transition
              duration-300
              hover:border-[#D4AF37]/40
              hover:bg-white/[0.10]
            "
          >

            <BedDouble
              className="mb-4 text-[#D4AF37]"
              size={34}
            />

            <h3 className="text-xl font-semibold text-white">
              Luxury Rooms
            </h3>

            <p className="mt-2 text-slate-300">
              Elegant accommodation designed for complete relaxation.
            </p>

          </div>

          {/* 5-Star Service */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.07]
              p-6
              shadow-2xl
              backdrop-blur-xl
              transition
              duration-300
              hover:border-[#D4AF37]/40
              hover:bg-white/[0.10]
            "
          >

            <Star
              className="mb-4 text-[#D4AF37]"
              size={34}
            />

            <h3 className="text-xl font-semibold text-white">
              5-Star Service
            </h3>

            <p className="mt-2 text-slate-300">
              Professional hospitality that exceeds every expectation.
            </p>

          </div>

          {/* Secure Booking */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.07]
              p-6
              shadow-2xl
              backdrop-blur-xl
              transition
              duration-300
              hover:border-[#D4AF37]/40
              hover:bg-white/[0.10]
            "
          >

            <ShieldCheck
              className="mb-4 text-[#D4AF37]"
              size={34}
            />

            <h3 className="text-xl font-semibold text-white">
              Secure Booking
            </h3>

            <p className="mt-2 text-slate-300">
              Fast, safe and reliable online reservations.
            </p>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
        "
      >

        <div
          className="
            flex
            h-14
            w-8
            justify-center
            rounded-full
            border
            border-white/40
          "
        >

          <div className="mt-2 h-3 w-1 rounded-full bg-[#D4AF37]" />

        </div>

      </motion.div>

    </section>
  );
}