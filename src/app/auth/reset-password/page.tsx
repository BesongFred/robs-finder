"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"


export default function ResetPasswordPage(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [message,setMessage] = useState("")


async function handleSubmit(e:React.FormEvent){

e.preventDefault()

const res = await fetch(
"/api/auth/reset-password",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
}
)


const data = await res.json()

setMessage(data.message)


if(res.ok){

setTimeout(()=>{
router.push("/auth/signin")
},1500)

}

}


return (

<main className="min-h-screen flex items-center justify-center bg-gray-100">

<div className="bg-white p-8 rounded-xl shadow w-full max-w-md">

<h1 className="text-3xl font-bold mb-6">
Reset Password
</h1>


<form
onSubmit={handleSubmit}
className="space-y-4"
>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-3 rounded"
/>


<input
type="password"
placeholder="New Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full border p-3 rounded"
/>


<button
className="w-full bg-blue-900 text-white p-3 rounded"
>
Update Password
</button>


</form>


{message && (
<p className="mt-4">
{message}
</p>
)}


<Link
href="/auth/signin"
className="block mt-5 text-blue-900"
>
Back to Login
</Link>


</div>

</main>

)

}