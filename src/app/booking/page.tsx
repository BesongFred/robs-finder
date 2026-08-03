// src/app/booking/page.tsx

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight, Wifi, Utensils, Car, BedDouble, Waves } from "lucide-react";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/rooms/fred.JPG"
            alt="Luxury guest house interior"
            fill
            priority
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#090909]" />
        </div>

        {/* Glass Card */}
        <div className="relative z-10 w-full max-w-4xl px-6">
          <div className="rounded-3xl border border-[#D4AF37]/40 bg-black/40 backdrop-blur-xl shadow-2xl p-8 md:p-14 text-center">

            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-[#D4AF37] px-5 py-2 mb-8">
              <span className="text-[#D4AF37] text-sm tracking-[0.3em] font-medium">
                COMING SOON
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#F8F1E7] leading-tight">
              Your Perfect Stay Is Almost Here
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Online booking will be available soon. Get ready to experience
              comfort, luxury, and unforgettable hospitality.
            </p>


            {/* Calendar Preview */}
            <div className="mt-10 flex justify-center">
              <div className="rounded-2xl bg-white/10 border border-white/20 p-6">
                <CalendarDays
                  size={60}
                  className="text-[#D4AF37]"
                />
              </div>
            </div>


            {/* Button */}
            <div className="mt-10">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 text-black font-semibold hover:bg-[#f1c75b] transition-all duration-300"
              >
                Explore Rooms
                <ArrowRight size={20}/>
              </Link>
            </div>

          </div>
        </div>

      </section>


      {/* Featured Rooms */}
      <section className="py-20 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-serif text-center text-[#F8F1E7] mb-12">
          Featured Rooms
        </h2>


        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Luxury Suite",
              image: "/images/luxury-room.jpg",
              price: "$250 / Night"
            },
            {
              title: "Premium Room",
              image: "/images/luxury-room.jpg",
              price: "$180 / Night"
            },
            {
              title: "Executive Room",
              image: "/images/luxury-room.jpg",
              price: "$150 / Night"
            },
          ].map((room) => (

            <div
              key={room.title}
              className="overflow-hidden rounded-3xl bg-white/5 border border-white/10"
            >

              <div className="relative h-64">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover"
                />
              </div>


              <div className="p-6">

                <h3 className="text-2xl font-serif text-[#F8F1E7]">
                  {room.title}
                </h3>

                <p className="text-[#D4AF37] mt-2">
                  {room.price}
                </p>

                <Link
                  href="/rooms"
                  className="mt-5 inline-flex items-center gap-2 text-white hover:text-[#D4AF37]"
                >
                  View Room
                  <ArrowRight size={18}/>
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>



      {/* Amenities */}
      <section className="py-20 bg-black px-6">

        <h2 className="text-4xl font-serif text-center text-[#F8F1E7] mb-12">
          Luxury Amenities
        </h2>


        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">

          {[
            {
              icon: Wifi,
              name:"Free WiFi"
            },
            {
              icon: Utensils,
              name:"Restaurant"
            },
            {
              icon: Car,
              name:"Parking"
            },
            {
              icon: BedDouble,
              name:"Room Service"
            },
            {
              icon: Waves,
              name:"Swimming Pool"
            }

          ].map((item)=>{

            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >

                <Icon
                  size={35}
                  className="mx-auto text-[#D4AF37]"
                />

                <p className="mt-4 text-gray-300">
                  {item.name}
                </p>

              </div>
            )

          })}

        </div>

      </section>

    </main>
  );
}