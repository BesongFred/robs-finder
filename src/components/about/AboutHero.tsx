"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
        //   backgroundImage:
backgroundImage:
"url('/images/about/about-hero.jpg')"
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0F172A]/75" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-20 lg:px-12">
        <div className="max-w-3xl">

          <span className="inline-block rounded-full border border-[#D4AF37] px-4 py-2 text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
            About Rob's Finder
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Luxury Hospitality,
            <span className="block text-[#D4AF37]">
              Designed Around You
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            At Rob's Finder Guest House, we believe every stay should feel
            effortless, elegant, and unforgettable. We combine premium comfort,
            exceptional service, and modern luxury to create memorable
            experiences for every guest.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/rooms"
              className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#0F172A] transition hover:scale-105"
            >
              Explore Rooms
            </Link>

            <Link
              href="/booking"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0F172A]"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}