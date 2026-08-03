"use client";

import { useState } from "react";


export default function ChangePasswordForm() {

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);



  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();


    setMessage("");



    if (newPassword !== confirmPassword) {

      setMessage(
        "New passwords do not match."
      );

      return;

    }



    if (newPassword.length < 6) {

      setMessage(
        "Password must be at least 6 characters."
      );

      return;

    }



    setLoading(true);



    try {


      const res = await fetch(
        "/api/profile/change-password",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",

          body: JSON.stringify({

            currentPassword,

            newPassword,

          }),
        }
      );



      const data = await res.json();



      if (res.ok) {

        setMessage(
          "Password changed successfully. Please login again."
        );


        setCurrentPassword("");

        setNewPassword("");

        setConfirmPassword("");


      } else {

        setMessage(
          data.message ||
          "Unable to change password."
        );

      }



    } catch(error) {


      console.error(error);


      setMessage(
        "Something went wrong."
      );


    } finally {


      setLoading(false);


    }


  }



  return (

<form

  onSubmit={handleSubmit}

  className="rounded-3xl bg-[#0F172A] p-8 shadow-2xl"

>


  <h2 className="text-2xl font-bold text-white">

    Change Password 🔒

  </h2>



  <p className="mt-2 text-slate-400">
    Keep your account secure with a new password.
  </p>



  <div className="mt-6 space-y-5">


    <input

      type="password"

      className="w-full rounded-xl border border-slate-600 bg-white/10 p-3 text-white placeholder-slate-400 outline-none focus:border-[#D4AF37]"

      placeholder="Current Password"

      value={currentPassword}

      onChange={(e)=>
        setCurrentPassword(e.target.value)
      }

      required

    />



    <input

      type="password"

      className="w-full rounded-xl border border-slate-600 bg-white/10 p-3 text-white placeholder-slate-400 outline-none focus:border-[#D4AF37]"

      placeholder="New Password"

      value={newPassword}

      onChange={(e)=>
        setNewPassword(e.target.value)
      }

      required

    />



    <input

      type="password"

      className="w-full rounded-xl border border-slate-600 bg-white/10 p-3 text-white placeholder-slate-400 outline-none focus:border-[#D4AF37]"

      placeholder="Confirm New Password"

      value={confirmPassword}

      onChange={(e)=>
        setConfirmPassword(e.target.value)
      }

      required

    />



    <button

      type="submit"

      disabled={loading}

      className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-[#0F172A] transition hover:bg-yellow-400 disabled:opacity-50"

    >

      {
        loading
        ? "Updating..."
        : "Change Password"
      }


    </button>



    {
      message && (

        <p className="text-green-400">

          {message}

        </p>

      )
    }


  </div>


</form>

);
}