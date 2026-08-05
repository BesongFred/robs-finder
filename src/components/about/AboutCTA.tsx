"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-[#F8FAFC] py-20">

      <div className="mx-auto max-w-5xl rounded-[40px] bg-[#0F172A] px-8 py-16 text-center shadow-2xl">

        <span className="rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
          BOOK YOUR STAY
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Experience Luxury Like Never Before
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Whether you're traveling for business, vacation, or a special
          occasion, Rob's Finder Guest House offers comfort, elegance,
          and exceptional hospitality from the moment you arrive.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/booking"
            className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#0F172A] transition hover:scale-105"
          >
            Book Now
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0F172A]"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}