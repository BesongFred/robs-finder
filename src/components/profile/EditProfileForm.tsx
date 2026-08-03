"use client";

import { useState } from "react";


type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string;
};


type Props = {
  user: User;
  onUpdate: (user: User) => void;
};


export default function EditProfileForm({
  user: initialUser,
  onUpdate,
}: Props) {


  const [selectedFile, setSelectedFile] = useState<File | null>(null);


  const [user, setUser] = useState<User>(initialUser);


  const [saving, setSaving] = useState(false);


  const [message, setMessage] = useState("");



  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault();


    setSaving(true);

    setMessage("");



    const res = await fetch("/api/profile", {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      credentials: "include",

      body: JSON.stringify({

        firstName: user.firstName,

        lastName: user.lastName,

        phone: user.phone,

      }),

    });



    const data = await res.json();



    if (res.ok) {

        if (selectedFile) {


  const avatarData = new FormData();

  avatarData.append(
    "file",
    selectedFile
  );


  const avatarRes = await fetch(
    "/api/profile/avatar",
    {
      method:"POST",
      credentials:"include",
      body:avatarData
    }
  );


  const avatarResult =
    await avatarRes.json();


  if(avatarRes.ok){

    onUpdate(avatarResult.user);

  }

}

      setMessage("Profile updated successfully.");

      onUpdate(data.user);


    } else {

      setMessage(
        data.message || "Unable to update profile."
      );

    }


    setSaving(false);

  }



  return (

    <form
      onSubmit={handleSubmit}
     className="rounded-2xl bg-[#0F172A] p-8 shadow-2xl"
    >


      <h2 className="text-2xl font-bold text-slate-100">
        Edit Profile
      </h2>



      <div className="mt-6 space-y-5">



        <input

           className="w-full rounded-3xl border border-slate-600 bg-white/10 p-3 text-white placeholder-slate-400 outline-none focus:border-[#D4AF37]"

          value={user.firstName ?? ""}

          onChange={(e) =>
            setUser({
              ...user,
              firstName: e.target.value,
            })
          }

          placeholder="First Name"

        />



        <input

          className="w-full rounded-3xl border p-3"

          value={user.lastName ?? ""}

          onChange={(e) =>
            setUser({
              ...user,
              lastName: e.target.value,
            })
          }

          placeholder="Last Name"

        />



        <input
    className="w-full rounded-3xl border p-3"

          value={user.email ?? ""}

          disabled

        />



        <input

          className="w-full rounded-3xl border p-3"

          value={user.phone ?? ""}

          onChange={(e) =>
            setUser({
              ...user,
              phone: e.target.value,
            })
          }

          placeholder="Phone Number"

        />



        {/* Profile Picture Selector */}

        <div>

          <label className="mb-2 block font-medium">
            Profile Picture
          </label>


          <input

            type="file"

            accept="image/*"

            onChange={(e) => {

              if (e.target.files?.length) {

                setSelectedFile(
                  e.target.files[0]
                );

              }

            }}

            className="w-full rounded-xl border p-3"

          />


          {
            selectedFile && (

              <p className="mt-2 text-sm text-slate-500">

                Selected: {selectedFile.name}

              </p>

            )
          }


        </div>





        <button

          type="submit"

          disabled={saving}

          className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-yellow-400 disabled:opacity-50"

        >

          {
            saving
              ? "Saving..."
              : "Save Changes"
          }


        </button>





        {
          message && (

            <p className="text-green-600">

              {message}

            </p>

          )
        }


      </div>


    </form>

  );

}