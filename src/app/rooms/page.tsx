// src/app/rooms/page.tsx
import { getRooms } from "@/lib/rooms";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Wifi, Coffee, Bath, Star } from "lucide-react";

export default async function RoomsPage() {
  const rooms = getRooms();
  return (
    <main className="min-h-screen bg-[#090909] text-white">


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">


        {/* Background */}
        <div className="absolute inset-0">

          <Image
            src="/images/gallry/Hero11.PNG"
            alt="Luxury rooms at Rob's Finder Guest House"
            fill
            priority
            className="object-cover"
          />


          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#090909]" />

        </div>



        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl px-6 text-center">


          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-6 py-2 mb-8">

            <BedDouble
              size={18}
              className="text-[#D4AF37]"
            />

            <span className="text-[#D4AF37] tracking-[0.3em] text-sm">
              LUXURY ROOMS
            </span>

          </div>




          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#F8F1E7]">

            Stay In Comfort
            <br />
            Experience Luxury

          </h1>




          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">

            Discover beautifully designed rooms created for relaxation,
            comfort, and unforgettable moments at Rob's Finder Guest House.

          </p>




          <Link
            href="/booking"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] text-black px-8 py-4 font-semibold hover:bg-[#f1c75b] transition"
          >

            Reserve Your Room

            <ArrowRight size={20}/>

          </Link>


        </div>


      </section>





      {/* Rooms Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">


        <h2 className="text-center text-4xl md:text-5xl font-serif text-[#F8F1E7] mb-14">

          Our Featured Rooms

        </h2>




        <div className="grid md:grid-cols-3 gap-8">

{rooms.map((room) => (

            <div
              key={room.name}
              className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition"
            >


              <div className="relative h-72">

                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />

              </div>



              <div className="p-6">


                <div className="flex items-center gap-2 text-[#D4AF37]">

                  <Star size={18} fill="currentColor"/>

                  <span>
                    Premium Stay
                  </span>

                </div>




                <h3 className="mt-4 text-2xl font-serif text-[#F8F1E7]">

                  {room.name}

                </h3>




                <p className="mt-3 text-[#D4AF37] font-semibold">

                  {room.price}

                </p>




                <Link
                  href="/booking"
                  className="mt-6 inline-flex items-center gap-2 text-white hover:text-[#D4AF37]"
                >

                  Book Now

                  <ArrowRight size={18}/>

                </Link>


              </div>


            </div>


          ))}



        </div>


      </section>





      {/* Room Amenities */}

      <section className="py-20 bg-black px-6">


        <h2 className="text-center text-4xl font-serif text-[#F8F1E7] mb-12">

          Room Features

        </h2>




        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">


          {[
            {
              icon:Wifi,
              name:"Free WiFi"
            },
            {
              icon:Coffee,
              name:"Breakfast"
            },
            {
              icon:Bath,
              name:"Private Bathroom"
            },
            {
              icon:BedDouble,
              name:"Luxury Bedding"
            }

          ].map((item)=>{


            const Icon = item.icon;


            return (

              <div
                key={item.name}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 text-center"
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





      {/* Call To Action */}

      <section className="py-20 text-center">


        <h2 className="text-4xl md:text-5xl font-serif text-[#F8F1E7]">

          Find Your Perfect Room

        </h2>



        <p className="mt-5 text-gray-400">

          Luxury, comfort, and hospitality waiting for you.

        </p>




        <Link
          href="/booking"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] text-black px-10 py-4 font-semibold hover:bg-[#f1c75b] transition"
        >

          Start Booking

          <ArrowRight size={20}/>

        </Link>


      </section>



    </main>
  );
}