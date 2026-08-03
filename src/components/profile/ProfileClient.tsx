"use client";

import { useState } from "react";

import LogoutButton from "@/components/auth/LogoutButton";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileStats from "@/components/profile/ProfileStats";
import EditProfileForm from "@/components/profile/EditProfileForm";
import ChangePasswordForm from "@/components/profile/ChangePasswordForm";
import BookingHistory from "@/components/profile/BookingHistory";
import FavoriteRooms from "@/components/profile/FavoriteRooms";
export default function ProfileClient({
  user: initialUser
}: any) {


  const [user, setUser] = useState(initialUser);



  return (

    <div className="space-y-10">


      {/* Top Action Bar */}

      <div className="flex items-center justify-between rounded-3xl bg-[#0F172A] p-6 shadow-xl">


        <div>

          <h2 className="text-2xl font-bold text-white">
            Account Settings
          </h2>


          <p className="mt-1 text-slate-400">
            Manage your personal information and security.
          </p>


        </div>


        <LogoutButton />


      </div>




      {/* Stats */}

      <ProfileStats user={user} />





      {/* Profile + Edit */}

      <div className="grid gap-8 lg:grid-cols-2">


        <ProfileCard
          user={user}
        />


        <EditProfileForm

          user={user}

          onUpdate={setUser}

        />


      </div>

<div>
  <BookingHistory />
</div>



      {/* Security */}

      <div>

        <ChangePasswordForm />

      </div>

<div>
  <FavoriteRooms />
</div>

    </div>

  );

}