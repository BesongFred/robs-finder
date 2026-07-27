"use client";

import { useState } from "react";
import Link from "next/link";


export default function SignupPage() {


  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });


  const [message, setMessage] = useState("");



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ){

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }



  async function handleSignup(){


    if(form.password !== form.confirmPassword){

      setMessage(
        "Passwords do not match"
      );

      return;

    }



    try{


      const response = await fetch(
        "/api/auth/signup",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(form)
        }
      );



      const data = await response.json();



      setMessage(data.message);



    }catch(error){

      setMessage(
        "Something went wrong"
      );

    }


  }





  return (

    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">


      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">


        <h1 className="text-3xl font-bold text-slate-900">
          Create Account
        </h1>


        <p className="mt-3 text-slate-600">
          Join Rob's Finder Guest House and enjoy premium services.
        </p>



        {
          message && (

            <div className="mt-4 rounded-xl bg-blue-50 p-3 text-blue-900">
              {message}
            </div>

          )
        }




        <div className="mt-6 space-y-4">



          <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="
          w-full
          rounded-xl
          border
          border-slate-200
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-900
          "
          />




          <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="
          w-full
          rounded-xl
          border
          border-slate-200
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-900
          "
          />




          <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="
          w-full
          rounded-xl
          border
          border-slate-200
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-900
          "
          />




          <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="
          w-full
          rounded-xl
          border
          border-slate-200
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-900
          "
          />




          <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="
          w-full
          rounded-xl
          border
          border-slate-200
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-900
          "
          />




          <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="
          w-full
          rounded-xl
          border
          border-slate-200
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-blue-900
          "
          />





          <button
          onClick={handleSignup}
          className="
          w-full
          rounded-xl
          bg-blue-900
          py-3
          text-white
          font-semibold
          hover:bg-blue-800
          transition
          "
          >

          Create Account

          </button>



        </div>




        <p className="mt-6 text-center text-sm text-slate-600">


          Already have an account?


          <Link
          href="/auth/signin"
          className="ml-2 text-blue-900 font-semibold"
          >

          Sign In

          </Link>


        </p>



      </div>


    </main>

  );

}