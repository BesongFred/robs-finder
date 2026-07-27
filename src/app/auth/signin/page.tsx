import Link from "next/link";
export default function SigninPage() {
  
  return (

    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">


      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">


        <h1 className="text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>


        <p className="mt-3 text-slate-600">
          Sign in to manage your Rob's Finder account.
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


          <input
            type="password"
            placeholder="Password"
            className="
            w-full
            rounded-xl
            border
            p-3
            "
          />



          <div className="flex justify-between text-sm">

            <label>
              <input type="checkbox" className="mr-2"/>
              Remember me
            </label>


            <a 
            href="/auth/forgot-password"
            className="text-blue-900"
            >
              Forgot Password?
            </a>


          </div>



       <Link
href="/"
className="
w-full
block
text-center
rounded-xl
bg-blue-900
py-3
text-white
font-semibold
hover:bg-blue-800
transition
"
>
Sign In
</Link>


        </div>


        <p className="mt-6 text-center text-sm text-slate-600">

          Don't have an account?

        <Link
href="/auth/signup"
className="ml-2 text-blue-900 font-semibold"
>
Create Account
</Link>

        </p>



      </div>


    </main>

  );
}
