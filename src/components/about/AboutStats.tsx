"use client";

import {
  Users,
  BedDouble,
  Award,
  Smile,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Guests",
  },
  {
    icon: BedDouble,
    value: "50+",
    label: "Luxury Rooms",
  },
  {
    icon: Award,
    value: "4.9★",
    label: "Guest Rating",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Guest Satisfaction",
  },
];

export default function AboutStats() {
  return (
    <section className="bg-[#0F172A] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="text-center">

          <span className="rounded-full border border-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#D4AF37]">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Trusted by Thousands of Guests
          </h2>

        </div>

        <div className="mt-16 grid gap-8 grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl bg-white/5 p-8 text-center border border-white/10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]">
                  <Icon className="h-8 w-8 text-[#0F172A]" />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-300">
                  {item.label}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}