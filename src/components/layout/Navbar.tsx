"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar(){

const [open,setOpen]=useState(false);


return (

<nav className="
fixed
top-0
z-50
w-full
bg-transparent
text-white
">


<div className="
max-w-7xl
mx-auto
flex
items-center
justify-between
px-6
py-5
">


<h1 className="
text-xl
font-bold
text-[#D4AF37]
">
Rob's Finder
</h1>


<button
onClick={()=>setOpen(!open)}
className="md:hidden"
>
☰
</button>



<div className="
hidden
md:flex
items-center
gap-8
">


<Link href="/">Home</Link>

<Link href="/rooms">
Rooms
</Link>

<Link href="/gallery">
Gallery
</Link>

<Link href="/amenities">
Amenities
</Link>

<Link href="/about">
About
</Link>

<Link href="/contact">
Contact
</Link>


<Link
href="/auth/signin"
className="
rounded-full
border
px-5
py-2
"
>
Login
</Link>


<Link
href="/auth/signup"
className="
rounded-full
bg-[#D4AF37]
text-black
px-5
py-2
"
>
Create Account
</Link>



</div>


</div>


</nav>

)

}
