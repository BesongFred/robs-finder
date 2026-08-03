// src/app/pagename/page.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Wifi, Coffee, Car, ShieldCheck } from "lucide-react";

export default function PageName() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/guest-house.jpg"
            alt="Rob's Finder Guest House"
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
            <Star className="text-[#D4AF37]" size={18}/>
            <span className="text-[#D4AF37] tracking-widest text-sm">
              LUXURY EXPERIENCE
            </span>
          </div>


          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#F8F1E7]">
            Experience Luxury
            <br />
            Like Never Before
          </h1>


          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            Welcome to Rob's Finder Guest House. Discover comfort,
            elegance, and unforgettable hospitality designed for your
            perfect stay.
          </p>


          <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">

            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] text-black px-8 py-4 font-semibold hover:bg-[#f1c75b] transition"
            >
              Book Your Stay
              <ArrowRight size={20}/>
            </Link>


            <Link
              href="/rooms"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 hover:bg-white/10 transition"
            >
              Explore Rooms
            </Link>

          </div>

        </div>

      </section>



      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto">

        <h2 className="text-center text-4xl font-serif text-[#F8F1E7] mb-12">
          Why Choose Rob's Finder
        </h2>


        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              icon: Wifi,
              title:"Free WiFi",
              text:"Stay connected anytime"
            },
            {
              icon: Coffee,
              title:"Restaurant",
              text:"Premium dining experience"
            },
            {
              icon: Car,
              title:"Parking",
              text:"Safe private parking"
            },
            {
              icon: ShieldCheck,
              title:"Security",
              text:"Comfort and peace of mind"
            }

          ].map((item)=>{

            const Icon = item.icon;

            return(
              <div
                key={item.title}
                className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center hover:border-[#D4AF37]/50 transition"
              >

                <Icon
                  size={40}
                  className="mx-auto text-[#D4AF37]"
                />

                <h3 className="mt-5 text-xl font-serif text-[#F8F1E7]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.text}
                </p>

              </div>
            )

          })}

        </div>

      </section>



      {/* Call To Action */}
      <section className="py-20 text-center bg-black">

        <h2 className="text-4xl md:text-5xl font-serif text-[#F8F1E7]">
          Your Luxury Stay Awaits
        </h2>


        <p className="mt-5 text-gray-400">
          Reserve your unforgettable experience at Rob's Finder Guest House.
        </p>


        <Link
          href="/booking"
          className="mt-8 inline-flex items-center gap-3 bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:bg-[#f1c75b] transition"
        >
          Start Booking
          <ArrowRight size={20}/>
        </Link>

      </section>

    </main>
  );
}