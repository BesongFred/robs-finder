"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";


export default function ContactCTA() {

  return (

    <section className="
    relative
    overflow-hidden
    bg-[#0F172A]
    py-24
    ">


      {/* Gold Glow */}
      <div className="
      absolute
      -right-20
      -top-20
      h-72
      w-72
      rounded-full
      bg-[#D4AF37]/20
      blur-3xl
      " />


      <div className="
      relative
      mx-auto
      max-w-5xl
      px-6
      text-center
      ">


        <div className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-[#D4AF37]
        px-5
        py-2
        ">

          <Star
            size={18}
            className="text-[#D4AF37]"
          />

          <span className="
          text-sm
          font-semibold
          tracking-widest
          text-[#D4AF37]
          ">
            LUXURY HOSPITALITY
          </span>

        </div>



        <h2 className="
        mt-8
        text-4xl
        font-bold
        text-white
        md:text-5xl
        ">

          Ready For Your Perfect Stay?

        </h2>



        <p className="
        mx-auto
        mt-6
        max-w-2xl
        text-lg
        leading-8
        text-slate-300
        ">

          Experience comfort, elegance, and personalized hospitality
          at Rob's Finder Guest House. Reserve your stay today.

        </p>



        <div className="
        mt-10
        flex
        flex-col
        justify-center
        gap-4
        sm:flex-row
        ">



          <Link

          href="/booking"

          className="
          inline-flex
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[#D4AF37]
          px-8
          py-4
          font-semibold
          text-[#0F172A]
          transition
          hover:scale-105
          "

          >

            Book Your Stay

            <ArrowRight size={20}/>

          </Link>




          <Link

          href="/rooms"

          className="
          rounded-full
          border
          border-white/30
          px-8
          py-4
          text-white
          transition
          hover:bg-white/10
          "

          >

            View Rooms

          </Link>



        </div>


      </div>


    </section>

  );

}