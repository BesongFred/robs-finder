export default function ForgotPasswordPage(){

return(

<main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">


<div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">


<h1 className="text-3xl font-bold text-slate-900">
Forgot Password
</h1>


<p className="mt-3 text-slate-600">
Enter your email to reset your password.
</p>



<div className="mt-6 space-y-4">


<input
type="email"
placeholder="Email Address"
className="
w-full
rounded-xl
border
p-3
"
/>



<button
className="
w-full
rounded-xl
bg-blue-900
py-3
text-white
hover:bg-blue-800
"
>

Send Reset Link

</button>


</div>


</div>


</main>


)

}
