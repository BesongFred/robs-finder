"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function SigninPage() {

  const router = useRouter();


  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }




  async function handleLogin() {

    setLoading(true);
    setMessage("");


    try {

      const response =
        await fetch(
          "/api/auth/signin",
          {
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            credentials:"include",
            body:JSON.stringify(form),
          }
        );


      const data =
        await response.json();



      if(!response.ok){

        setMessage(
          data.message
        );

        return;

      }


router.replace("/home");


    }catch{

      setMessage(
        "Something went wrong."
      );


    }finally{

      setLoading(false);

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

Welcome Back

</h1>



<p className="
mt-3
text-slate-300
">

Sign in to your Rob's Finder account.

</p>




{
message && (

<div className="
mt-4
rounded-xl
bg-red-500/20
p-3
text-red-300
">

{message}

</div>

)

}




<div className="
mt-6
space-y-4
">


<label className="
block
text-sm
text-slate-200
">

Email Address

</label>


<input

name="email"

type="email"

placeholder="Enter your email"

value={form.email}

onChange={handleChange}

className={inputStyle}

/>




<label className="
block
text-sm
text-slate-200
">

Password

</label>


<input

name="password"

type="password"

placeholder="Enter your password"

value={form.password}

onChange={handleChange}

className={inputStyle}

/>





<div className="
flex
items-center
justify-between
text-sm
text-slate-300
">


<label className="flex items-center">

<input
type="checkbox"
className="mr-2"
/>

Remember me

</label>



<Link

href="/auth/forgot-password"

className="
text-yellow-400
hover:text-yellow-300
"

>

Forgot Password?

</Link>



</div>





<button

onClick={handleLogin}

disabled={loading}

className="
w-full
rounded-xl
bg-yellow-500
py-3
font-bold
text-slate-900
transition
hover:bg-yellow-400
disabled:opacity-60
"

>

{
loading
?
"Signing In..."
:
"Sign In"
}


</button>



</div>





<p className="
mt-6
text-center
text-sm
text-slate-300
">

Don't have an account?


<Link

href="/auth/signup"

className="
ml-2
font-semibold
text-yellow-400
hover:text-yellow-300
"

>

Create Account

</Link>


</p>



</div>


</main>

);

}