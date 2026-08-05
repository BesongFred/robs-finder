"use client";

import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
            OUR PURPOSE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0F172A]">
            Driven by Excellence,
            Inspired by Hospitality
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every decision we make is centered around creating memorable
            guest experiences through comfort, trust, elegance, and
            exceptional customer service.
          </p>

        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Mission Card */}
          <div className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
              <Target className="h-8 w-8 text-[#D4AF37]" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#0F172A]">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              To provide every guest with a luxurious, comfortable, and
              unforgettable stay through exceptional service, modern
              facilities, and genuine hospitality.
            </p>

          </div>

          {/* Vision Card */}
          <div className="rounded-3xl bg-[#0F172A] p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              <Eye className="h-8 w-8 text-[#D4AF37]" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              Our Vision
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              To become one of the most trusted and preferred luxury guest
              house destinations by delivering outstanding hospitality,
              elegant accommodations, and lasting memories for every guest.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}