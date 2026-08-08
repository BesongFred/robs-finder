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
    <section className="bg-transparent py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >

          <p className="text-sm uppercase tracking-[5px] text-[#D4AF37]">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Luxury Meets Hospitality
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
            Every detail has been carefully designed to provide guests with an
            unforgettable experience, combining elegance, comfort and
            world-class service.
          </p>

        </motion.div>


        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}

                viewport={{
                  once: true,
                }}

                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}

                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/10
                  p-8
                  shadow-xl
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-[#D4AF37]/40
                  hover:bg-white/[0.14]
                  hover:shadow-2xl
                "
              >

                {/* Icon */}
                <div
                  className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/20
                    bg-[#D4AF37]/10
                  "
                >

                  <Icon
                    size={30}
                    className="text-[#D4AF37]"
                  />

                </div>


                {/* Title */}
                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>


                {/* Description */}
                <p className="mt-4 leading-7 text-slate-300">
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
