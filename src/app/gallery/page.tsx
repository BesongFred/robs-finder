// src/app/gallery/page.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Sparkles } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">

          <Image
            src="/images/guest-house.jpg"
            alt="Rob's Finder Gallery"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#090909]" />

        </div>


        {/* Content */}
        <div className="relative z-10 max-w-5xl px-6 text-center">

          <div className="inline-flex items-center gap-2 border border-[#D4AF37] rounded-full px-6 py-2 mb-8">

            <Camera
              size={18}
              className="text-[#D4AF37]"
            />

            <span className="text-[#D4AF37] tracking-[0.3em] text-sm">
              OUR GALLERY
            </span>

          </div>



          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#F8F1E7]">

            Discover Our
            <br />
            Luxury Moments

          </h1>



          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">

            Explore beautiful spaces, elegant rooms, and unforgettable
            experiences at Rob's Finder Guest House.

          </p>



          <div className="mt-10 flex justify-center">

            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] text-black px-8 py-4 font-semibold hover:bg-[#f1c75b] transition"
            >

              Explore Home

              <ArrowRight size={20}/>

            </Link>

          </div>

        </div>

      </section>




      {/* Coming Soon Gallery */}
      <section className="py-24 px-6 max-w-7xl mx-auto">


        <div className="rounded-3xl border border-[#D4AF37]/40 bg-white/5 backdrop-blur-xl p-10 md:p-16 text-center">


          <Sparkles
            size={55}
            className="mx-auto text-[#D4AF37]"
          />


          <h2 className="mt-8 text-4xl md:text-5xl font-serif text-[#F8F1E7]">

            Gallery Coming Soon

          </h2>


          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg">

            We are preparing a beautiful collection of images showcasing
            our luxury rooms, peaceful environment, premium services,
            and memorable guest experiences.

          </p>



          {/* Gallery Preview Cards */}

          <div className="grid md:grid-cols-3 gap-6 mt-12">


            {[
              "Luxury Rooms",
              "Guest Experience",
              "Beautiful Spaces"

            ].map((item)=>(

              <div
                key={item}
                className="h-56 rounded-3xl border border-white/10 bg-black/40 flex items-center justify-center"
              >

                <p className="text-xl font-serif text-[#F8F1E7]">
                  {item}
                </p>

              </div>

            ))}


          </div>


        </div>


      </section>




      {/* CTA */}

      <section className="py-20 bg-black text-center">

        <h2 className="text-4xl md:text-5xl font-serif text-[#F8F1E7]">

          Experience Rob's Finder

        </h2>


        <p className="mt-5 text-gray-400">

          Your luxury getaway destination is waiting.

        </p>



        <Link
          href="/booking"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] text-black px-10 py-4 font-semibold hover:bg-[#f1c75b] transition"
        >

          Book Your Stay

          <ArrowRight size={20}/>

        </Link>


      </section>


    </main>
  );
}