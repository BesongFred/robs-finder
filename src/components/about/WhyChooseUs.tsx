"use client";

import {
  ShieldCheck,
  MapPin,
  Sparkles,
  ConciergeBell,
  Wifi,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Luxury Accommodation",
    description:
      "Beautifully designed rooms with premium comfort, elegant interiors, and a relaxing atmosphere.",
  },
  {
    icon: ConciergeBell,
    title: "Exceptional Service",
    description:
      "Friendly staff dedicated to providing personalized hospitality throughout your stay.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Conveniently located near key attractions, business centers, and local experiences.",
  },
  {
    icon: Wifi,
    title: "Modern Amenities",
    description:
      "High-speed Wi-Fi, smart entertainment, secure parking, and everything needed for a seamless stay.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your comfort and security are our priority, with reliable support and secure facilities.",
  },
  {
    icon: Star,
    title: "Memorable Experience",
    description:
      "Every visit is designed to leave lasting memories through comfort, elegance, and attention to detail.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0F172A]">
            Everything You Need for
            <span className="block text-[#D4AF37]">
              an Exceptional Stay
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Rob's Finder Guest House, every detail is thoughtfully designed
            to provide comfort, luxury, and a truly memorable hospitality
            experience.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-100 bg-[#F8FAFC] p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]">
                  <Icon className="h-8 w-8 text-[#D4AF37] group-hover:text-[#0F172A]" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}