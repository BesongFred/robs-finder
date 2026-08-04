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
  ) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }



  async function handleSignup() {

    if(form.password !== form.confirmPassword){

      setMessage("Passwords do not match");
      return;

    }


    try {

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


    } catch(error){

      setMessage(
        "Something went wrong"
      );

    }

  }



  const inputStyle = `
    w-full
    rounded-xl
    border
    border-slate-600
    bg-slate-900
    px-4
    py-3
    text-white
    placeholder:text-slate-400
    outline-none
    focus:border-yellow-500
    focus:ring-2
    focus:ring-yellow-500/30
  `;



return (

<main className="
min-h-screen
flex
items-center
justify-center
bg-[#0F172A]
px-4
py-10
">


<div className="
w-full
max-w-md
rounded-2xl
bg-slate-800
p-8
shadow-2xl
">


<h1 className="
text-3xl
font-bold
text-white
">
Create Account
</h1>


<p className="
mt-3
text-slate-300
">
Join Rob's Finder Guest House and enjoy premium services.
</p>



{
message && (

<div className="
mt-4
rounded-xl
bg-yellow-500/20
p-3
text-yellow-300
">

{message}

</div>

)
}



<div className="mt-6 space-y-4">


<label className="block text-sm text-slate-200">
First Name
</label>

<input
name="firstName"
value={form.firstName}
onChange={handleChange}
placeholder="Enter your first name"
className={inputStyle}
/>



<label className="block text-sm text-slate-200">
Last Name
</label>

<input
name="lastName"
value={form.lastName}
onChange={handleChange}
placeholder="Enter your last name"
className={inputStyle}
/>



<label className="block text-sm text-slate-200">
Email Address
</label>

<input
name="email"
type="email"
value={form.email}
onChange={handleChange}
placeholder="Enter your email"
className={inputStyle}
/>



<label className="block text-sm text-slate-200">
Phone Number
</label>

<input
name="phone"
value={form.phone}
onChange={handleChange}
placeholder="Enter your phone number"
className={inputStyle}
/>



<label className="block text-sm text-slate-200">
Password
</label>

<input
name="password"
type="password"
value={form.password}
onChange={handleChange}
placeholder="Create password"
className={inputStyle}
/>



<label className="block text-sm text-slate-200">
Confirm Password
</label>

<input
name="confirmPassword"
type="password"
value={form.confirmPassword}
onChange={handleChange}
placeholder="Confirm password"
className={inputStyle}
/>



<button
onClick={handleSignup}
className="
w-full
rounded-xl
bg-yellow-500
py-3
font-bold
text-slate-900
transition
hover:bg-yellow-400
"
>

Create Account

</button>


</div>



<p className="
mt-6
text-center
text-sm
text-slate-300
">


Already have an account?


<Link
href="/auth/signin"
className="
ml-2
font-semibold
text-yellow-400
hover:text-yellow-300
"
>

Sign In

</Link>


</p>



</div>


</main>

);

}