"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BedDouble,
  Headphones,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: BedDouble,
    title: "Premium Rooms",
    description:
      "Elegantly furnished rooms with luxury bedding, modern interiors and exceptional comfort.",
  },
  {
    icon: Headphones,
    title: "24/7 Guest Support",
    description:
      "Our dedicated hospitality team is always available to make your stay effortless.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Booking",
    description:
      "Book with confidence using our safe, secure and trusted reservation system.",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
    description:
      "From arrival to departure, enjoy personalized service and unforgettable hospitality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF37] text-sm">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Luxury Meets Hospitality
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 leading-8">
            Every detail has been carefully designed to provide guests with an
            unforgettable experience, combining elegance, comfort and world-class
            service.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
                "
              >

                <div
                  className="
                  w-16
                  h-16
                  rounded-full
                  bg-[#D4AF37]/10
                  flex
                  items-center
                  justify-center
                  mb-6
                  "
                >
                  <Icon
                    size={30}
                    className="text-[#D4AF37]"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {feature.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}