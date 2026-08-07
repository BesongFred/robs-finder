"use client";

import { useEffect, useState } from "react";

export default function HomeWelcome() {

  const [user, setUser] = useState<any>(null);


  useEffect(() => {

    async function getUser(){

      const res = await fetch(
        "/api/auth/me",
        {
          credentials:"include",
        }
      );


      const data = await res.json();


      if(data.user){
        setUser(data.user);
      }

    }


    getUser();

  }, []);



  if(!user) return null;



  return (

    <div className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      px-4
      text-center
    ">


      <div>


        <h1 className="
          text-4xl
          md:text-6xl
          font-bold
          text-white
        ">

          Welcome back, {user.firstName} 👋

        </h1>



        <p className="
          mt-5
          text-lg
          text-slate-200
        ">

          Experience luxury stays with Rob's Finder.

        </p>


      </div>


    </div>

  );

}