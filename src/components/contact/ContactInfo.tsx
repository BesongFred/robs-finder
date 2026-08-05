"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function ContactInfo() {
  const items = [
    {
      icon: MapPin,
      title: "Address",
      value: "Your Guest House Address",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+000 000 000 000",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@robsfinder.com",
    },
    {
      icon: Clock,
      title: "Reception Hours",
      value: "Open Daily • 24/7 Online Support",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="text-center">

          <span className="rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
            GET IN TOUCH
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0F172A]">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Contact us for reservations, questions, or special requests.
            Our team is committed to providing prompt and friendly assistance.
          </p>

        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                  <Icon className="h-8 w-8 text-[#D4AF37]" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {item.value}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}