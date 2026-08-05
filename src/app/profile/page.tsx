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


    console.log(
      "TOKEN EMAIL:",
      decoded.email
    );


    user = await findUserByEmail(
      decoded.email
    );


    console.log(
      "PROFILE USER:",
      user
    );

  }



  return (

    <main className="
      min-h-screen
      bg-[#F8FAFC]
      py-10
      px-4
    ">


      <div className="
        max-w-6xl
        mx-auto
      ">


        <div className="
          bg-[#0F172A]
          rounded-3xl
          p-8
          text-white
          shadow-xl
        ">


          <h1 className="
            text-4xl
            font-bold
          ">
            My Profile
          </h1>


          <p className="
            mt-3
            text-slate-300
          ">
            Manage your Rob's Finder Guest House account
          </p>


        </div>



        <ProfileClient user={user} />


      </div>


    </main>

  );

}