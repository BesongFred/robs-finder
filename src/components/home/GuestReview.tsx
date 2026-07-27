"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United Kingdom",
    image: "/images/testimonials/guest1.jpg",
    rating: 5,
    review:
      "Our stay at Rob's Finder Guest House exceeded every expectation. The rooms were spotless, beautifully designed, and the staff treated us like family. We will definitely return.",
  },
  {
    id: 2,
    name: "Michael Brown",
    country: "Canada",
    image: "/images/testimonials/guest2.jpg",
    rating: 5,
    review:
      "Excellent hospitality, secure environment, and delicious breakfast. The booking process was simple and the experience was truly luxurious.",
  },
  {
    id: 3,
    name: "Grace Williams",
    country: "South Africa",
    image: "/images/testimonials/guest3.jpg",
    rating: 5,
    review:
      "One of the finest guest houses I've visited. Beautiful rooms, peaceful surroundings, and exceptional customer service from check-in to departure.",
  },
];

export default function GuestReviews() {
  return (
    <section
      id="reviews"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF37] text-sm">
            Testimonials
          </p>

          <h2 className="mt-3 text-5xl font-bold text-slate-900">
            What Our Guests Say
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-600 leading-8">
            Nothing speaks louder than the experiences of our happy guests.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {reviews.map((review, index) => (

            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                relative
                rounded-3xl
                bg-slate-50
                p-8
                shadow-lg
                hover:shadow-2xl
                transition-all
              "
            >

              <Quote
                size={42}
                className="absolute right-8 top-8 text-[#D4AF37]/20"
              />

              <div className="flex items-center gap-4">

                <div className="relative h-16 w-16 overflow-hidden rounded-full">

                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {review.name}
                  </h3>

                  <p className="text-slate-500">
                    {review.country}
                  </p>

                </div>

              </div>

              <div className="flex gap-1 mt-6">

                {[...Array(review.rating)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    fill="#D4AF37"
                    className="text-[#D4AF37]"
                  />

                ))}

              </div>

              <p className="mt-6 leading-8 text-slate-600 italic">
                "{review.review}"
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}