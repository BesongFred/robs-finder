import ProfileClient from "@/components/profile/ProfileClient";

import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { findUserByEmail } from "@/lib/auth";


export default async function ProfilePage() {


  const cookieStore = await cookies();

  const token = cookieStore.get("tambe_token")?.value;


  let user = null;



  if (token) {

    const decoded: any = verifyToken(token);

    user = findUserByEmail(decoded.email);

  }



  return (

    <main className="min-h-screen bg-[#F8FAFC] px-6 py-10">


      <div className="mx-auto max-w-7xl">


        <div className="mb-10 rounded-3xl bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] p-10 text-white shadow-2xl">


          <h1 className="text-4xl font-bold">
            My Profile
          </h1>


          <p className="mt-3 text-slate-300">
            Manage your Rob's Finder Guest House account
          </p>


        </div>



        <ProfileClient user={user} />


      </div>


    </main>

  );

}