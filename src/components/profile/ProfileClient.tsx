"use client";

import { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileStats from "./ProfileStats";
import EditProfileForm from "./EditProfileForm";
import ProfileAvatar from "./ProfileAvatar";
import LogoutButton from "../auth/LogoutButton";
import BookingHistory from "./BookingHistory";

type User = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string | null;
  createdAt?: string;
};


export default function ProfileClient({
  user: initialUser
}: {
  user?: User | null;
}) {


  const [user, setUser] = useState<User | null>(
    initialUser ?? null
  );


  if (!user) {

    return (
      <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#F8FAFC]
      ">

        <p className="
          text-[#0F172A]
          text-xl
          font-semibold
        ">
          Loading profile...
        </p>

      </div>
    );

  }



  function updateUser(updatedUser: User){

    setUser(updatedUser);

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
          flex
          flex-col
          md:flex-row
          items-center
          gap-6
        ">


   <ProfileAvatar

 avatar={user.avatar}

 name={`${user.firstName} ${user.lastName}`}

 onUpdate={(avatar)=>{

   setUser({
     ...user,
     avatar
   });

 }}

/>


          <div className="flex-1">

            <h1 className="
              text-3xl
              font-bold
            ">
              {user.firstName} {user.lastName}
            </h1>


            <p className="
              text-gray-300
              mt-2
            ">
              Rob's Finder Guest House Member
            </p>


            <div className="
              mt-4
              flex
              flex-wrap
              gap-3
            ">

              <span className="
                bg-white/10
                px-4
                py-2
                rounded-full
              ">
                {user.email}
              </span>


              <span className="
                bg-[#D4AF37]
                text-black
                px-4
                py-2
                rounded-full
                font-semibold
              ">
                Verified Guest
              </span>

            </div>

          </div>


          <LogoutButton />


        </div>



        <div className="mt-8">

       <ProfileStats

  bookings={0}

  upcoming={0}

  favorites={0}

  rewards={0}

/>

        </div>



        <div className="
          grid
          md:grid-cols-2
          gap-8
          mt-8
        ">


          <ProfileCard
            user={user}
          />


          <EditProfileForm
            user={user}
            onUpdate={updateUser}
          />
<BookingHistory />

        </div>


      </div>


    </main>

  );

}