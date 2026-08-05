"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";


const questions = [
  {
    question: "How can I make a reservation?",
    answer:
      "You can make a reservation through our booking page or contact our team directly for assistance.",
  },

  {
    question: "What types of rooms are available?",
    answer:
      "We offer comfortable and elegant rooms designed to provide a relaxing and memorable stay.",
  },

  {
    question: "Do you provide WiFi?",
    answer:
      "Yes, guests can enjoy reliable internet access during their stay.",
  },

  {
    question: "Do you offer special requests?",
    answer:
      "Yes. Contact our team and we will do our best to assist with your requirements.",
  },

  {
    question: "What payment methods are accepted?",
    answer:
      "Payment options will be provided during the reservation process.",
  },
];



export default function ContactFAQ() {


  const [open, setOpen] = useState<number | null>(null);



  return (

    <section className="bg-white py-20">


      <div className="mx-auto max-w-5xl px-6">


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
            FAQ
          </span>


          <h2 className="
          mt-6
          text-4xl
          font-bold
          text-[#0F172A]
          ">
            Frequently Asked Questions
          </h2>


          <p className="
          mt-4
          text-gray-600
          ">
            Find answers to common questions about your stay.
          </p>


        </div>




        <div className="mt-12 space-y-4">


          {
            questions.map((item,index)=>(


              <div

              key={item.question}

              className="
              rounded-2xl
              border
              border-gray-200
              bg-[#F8FAFC]
              overflow-hidden
              "

              >


                <button

                onClick={()=> 
                  setOpen(
                    open === index ? null : index
                  )
                }

                className="
                flex
                w-full
                items-center
                justify-between
                p-6
                text-left
                font-semibold
                text-[#0F172A]
                "

                >

                  {item.question}


                  <ChevronDown

                  className={`
                  transition
                  ${
                    open === index
                    ? "rotate-180"
                    : ""
                  }
                  `}

                  />

                </button>



                {
                  open === index && (

                    <div className="
                    px-6
                    pb-6
                    text-gray-600
                    leading-7
                    ">

                      {item.answer}

                    </div>

                  )
                }


              </div>


            ))
          }


        </div>


      </div>


    </section>

  );

}