"use client";

import { MapPin } from "lucide-react";

export default function ContactMap() {

  return (

    <section className="bg-[#F8FAFC] py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-12">


        <div className="text-center">

          <span className="
          rounded-full
          bg-[#D4AF37]/10
          px-4
          py-2
          text-sm
          font-semibold
          text-[#D4AF37]
          ">
            LOCATION
          </span>


          <h2 className="
          mt-6
          text-4xl
          font-bold
          text-[#0F172A]
          ">
            Find Rob's Finder Guest House
          </h2>


          <p className="
          mt-4
          text-gray-600
          ">
            Visit us and experience comfort, elegance, and exceptional hospitality.
          </p>


        </div>



        <div className="
        mt-12
        overflow-hidden
        rounded-3xl
        shadow-xl
        border
        border-gray-200
        ">


          {/* Replace this with your real Google Map later */}

          <div className="
          flex
          h-[400px]
          items-center
          justify-center
          bg-[#0F172A]
          ">


            <div className="text-center">

              <MapPin
                className="mx-auto text-[#D4AF37]"
                size={50}
              />


              <h3 className="
              mt-4
              text-xl
              font-bold
              text-white
              ">
                Rob's Finder Guest House
              </h3>


              <p className="
              mt-2
              text-slate-300
              ">
                Your location will appear here
              </p>


            </div>


          </div>


        </div>


      </div>


    </section>

  );

}