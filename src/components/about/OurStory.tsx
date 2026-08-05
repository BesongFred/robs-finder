"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">

        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/images/gallery/Hero11.PNG"
            alt="Rob's Finder Guest House"
            width={900}
            height={700}
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
            priority={false}
          />
        </div>

        {/* Content */}
        <div>

          <span className="inline-block rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
            OUR STORY
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0F172A]">
            More Than a Place to Stay
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Rob's Finder Guest House was created with one simple vision:
            to provide guests with a luxurious, peaceful, and memorable
            experience where comfort meets exceptional hospitality.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From elegant rooms and personalized service to modern amenities
            and a welcoming atmosphere, every detail is designed to make
            every guest feel at home while enjoying the experience of a
            premium stay.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow">

              <h3 className="text-3xl font-bold text-[#D4AF37]">
                500+
              </h3>

              <p className="mt-2 text-gray-600">
                Happy Guests
              </p>

            </div>

            <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow">

              <h3 className="text-3xl font-bold text-[#D4AF37]">
                4.9★
              </h3>

              <p className="mt-2 text-gray-600">
                Guest Rating
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}