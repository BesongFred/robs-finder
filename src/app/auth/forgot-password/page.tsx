"use client";

import { useState } from "react";
import Link from "next/link";


export default function ForgotPasswordPage() {


const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);



async function handleReset(){

setLoading(true);
setMessage("");


try{


const response = await fetch(
"/api/auth/reset-password",
{
method:"POST",
headers:{
"Content-Type":"application/json",
},
body:JSON.stringify({
email
})
}
);



const data = await response.json();


setMessage(data.message);



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
px-6
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

Forgot Password

</h1>



<p className="
mt-3
text-slate-300
">

Enter your email and we will help you reset your password.

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

type="email"

placeholder="Enter your email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className={inputStyle}

/>





<button

onClick={handleReset}

disabled={loading}

className="
w-full
rounded-xl
bg-yellow-500
py-3
font-bold
text-slate-900
hover:bg-yellow-400
disabled:opacity-60
"

>


{
loading
?
"Sending..."
:
"Send Reset Link"
}



</button>


</div>





<p className="
mt-6
text-center
text-sm
text-slate-300
">


Remember your password?


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