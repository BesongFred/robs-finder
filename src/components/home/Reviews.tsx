"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "John Martin",
    role: "Business Traveler",
    message:
      "Amazing experience. The rooms were clean, comfortable and the service was excellent.",
  },
  {
    name: "Sarah Williams",
    role: "Holiday Guest",
    message:
      "A beautiful place with friendly staff. I enjoyed every moment of my stay.",
  },
  {
    name: "Michael Brown",
    role: "Family Guest",
    message:
      "Perfect location, great hospitality and very comfortable rooms.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[5px] text-[#D4AF37]">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            What Our Guests Say
          </h2>
        </div>


        <div className="grid gap-8 md:grid-cols-3">

          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gray-50 p-8 shadow-lg"
            >

              <div className="flex gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>


              <p className="mt-6 leading-relaxed text-gray-600">
                "{review.message}"
              </p>


              <h3 className="mt-6 font-bold text-slate-900">
                {review.name}
              </h3>

              <p className="text-sm text-gray-500">
                {review.role}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}