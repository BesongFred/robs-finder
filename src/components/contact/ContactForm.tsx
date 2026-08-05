"use client";

import { useState } from "react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });


  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }




  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);
    setStatus("");


    try {

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),

        }
      );



      const result = await response.json();



      if(response.ok){

        setStatus(
          "Message sent successfully. We will contact you soon."
        );


        setFormData({
          fullName:"",
          email:"",
          phone:"",
          subject:"",
          message:"",
        });


      } else {

        setStatus(
          result.message || "Something went wrong"
        );

      }



    } catch(error){

      setStatus(
        "Unable to send message. Please try again."
      );


    } finally {

      setLoading(false);

    }

  }




  const inputStyle = `
    w-full
    rounded-xl
    border
    border-white/20
    bg-white/10
    p-4
    text-white
    placeholder:text-slate-400
    outline-none
    transition
    focus:border-[#D4AF37]
    focus:ring-1
    focus:ring-[#D4AF37]
  `;



  return (

    <section className="bg-[#F8FAFC] py-20">


      <div className="
      mx-auto
      grid
      max-w-7xl
      gap-12
      px-6
      lg:grid-cols-2
      lg:px-12
      ">



        {/* Text Side */}

        <div>


          <span className="
          rounded-full
          bg-[#D4AF37]/10
          px-4
          py-2
          text-sm
          font-semibold
          text-[#D4AF37]
          ">
            SEND MESSAGE
          </span>



          <h2 className="
          mt-6
          text-4xl
          font-bold
          text-[#0F172A]
          ">

            Let's Plan Your Perfect Stay

          </h2>



          <p className="
          mt-6
          max-w-lg
          text-lg
          leading-8
          text-gray-600
          ">

            Have questions about rooms, reservations,
            or special requests?
            Send us a message and our hospitality
            team will assist you.

          </p>


        </div>





        {/* Form Side */}


        <form

        onSubmit={handleSubmit}

        className="
        space-y-5
        rounded-3xl
        border
        border-white/10
        bg-[#0F172A]
        p-8
        shadow-2xl
        "

        >



          <input

          name="fullName"

          value={formData.fullName}

          onChange={handleChange}

          placeholder="Full Name"

          className={inputStyle}

          />




          <input

          name="email"

          type="email"

          value={formData.email}

          onChange={handleChange}

          placeholder="Email Address"

          className={inputStyle}

          />





          <input

          name="phone"

          value={formData.phone}

          onChange={handleChange}

          placeholder="Phone Number"

          className={inputStyle}

          />





          <input

          name="subject"

          value={formData.subject}

          onChange={handleChange}

          placeholder="Subject"

          className={inputStyle}

          />





          <textarea

          name="message"

          value={formData.message}

          onChange={handleChange}

          placeholder="Your Message"

          rows={5}

          className={inputStyle}

          />





          <button

          disabled={loading}

          className="
          w-full
          rounded-xl
          bg-[#D4AF37]
          py-4
          font-bold
          text-[#0F172A]
          transition
          hover:bg-[#f1c75b]
          disabled:opacity-50
          "

          >

            {
              loading
              ? "Sending..."
              : "Send Message"
            }

          </button>





          {
            status && (

              <p className="
              text-center
              text-sm
              font-medium
              text-[#D4AF37]
              ">

                {status}

              </p>

            )
          }



        </form>



      </div>


    </section>

  );

}