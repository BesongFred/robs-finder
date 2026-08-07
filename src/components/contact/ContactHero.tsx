"use client";

import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/gallery/Hero11.PNG')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F172A]/75" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-20 lg:px-12">

        <div className="max-w-3xl">

          <span className="inline-flex rounded-full border border-[#D4AF37] px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Contact Rob's Finder
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            We're Here to Make
            <span className="block text-[#D4AF37]">
              Every Stay Exceptional
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Whether you have questions about our rooms, need help with a
            reservation, or would like assistance planning your stay, our
            team is ready to help. We look forward to welcoming you to
            Rob's Finder Guest House.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/booking"
              className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#0F172A] transition hover:scale-105"
            >
              Book Your Stay
            </Link>

            <Link
              href="/rooms"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0F172A]"
            >
              Explore Rooms
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}