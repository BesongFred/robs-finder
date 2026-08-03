"use client";

import ProfileAvatar from "./ProfileAvatar";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string;
  createdAt?: string;
};


type ProfileCardProps = {
  user: User | null;
};


export default function ProfileCard({ user }: ProfileCardProps) {

  if (!user) {
    return (
      <div className="rounded-xl bg-slate-900 p-8 text-white">
        Unable to load profile.
      </div>
    );
  }


  return (

<div className="overflow-hidden rounded-2xl bg-[#0F172A] shadow-2xl">


      {/* Header */}
      <div className="flex items-center gap-6 p-8">


        <ProfileAvatar
          avatar={user.avatar}
          name={`${user.firstName} ${user.lastName}`}
        />


        <div>

          <h2 className="text-3xl font-bold text-white">
            {user.firstName} {user.lastName}
          </h2>


          <p className="mt-2 text-slate-300">
            {user.email}
          </p>


        </div>


      </div>



      {/* Details */}

      <div className="grid gap-6 p-8 md:grid-cols-2">


        <div>
          <p className="text-sm text-slate-500">
            First Name
          </p>

          <p className="font-semibold text-white">
            {user.firstName}
          </p>
        </div>



        <div>
          <p className="text-sm text-slate-500">
            Last Name
          </p>

          <p className="font-semibold text-white">
            {user.lastName}
          </p>
        </div>



        <div>
          <p className="text-sm text-slate-500">
            Email
          </p>

          <p className="font-semibold text-white">
            {user.email}
          </p>
        </div>



        <div>
          <p className="text-sm text-slate-500">
            Phone
          </p>

          <p className="font-semibold text-white">
            {user.phone || "Not provided"}
          </p>
        </div>



      </div>


    </div>

  );
}