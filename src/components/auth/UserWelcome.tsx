"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function UserWelcome() {

  const [user, setUser] = useState<any>(null);


  useEffect(() => {

    async function loadUser() {

      const response = await fetch(
        "/api/auth/me",
        {
          credentials: "include",
        }
      );


      const data = await response.json();


      if (data.user) {
        setUser(data.user);
      }

    }


    loadUser();

  }, []);



  if (!user) return null;



  return (

    <div className="
      flex
      items-center
      gap-3
      text-white
    ">


      {
        user.avatar ? (

          <Image
            src={user.avatar}
            alt="Profile"
            width={42}
            height={42}
            className="
              h-10
              w-10
              rounded-full
              object-cover
              border
              border-yellow-500
            "
          />

        ) : (

          <div className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-yellow-500
            font-bold
            text-slate-900
          ">

            {
              user.firstName
              ?.charAt(0)
              .toUpperCase()
            }

          </div>

        )
      }



      <span className="
        font-semibold
      ">

        Welcome, {user.firstName} 👋

      </span>


    </div>

  );

}