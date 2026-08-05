"use client";

import Image from "next/image";
import { useRef, useState } from "react";


type Props = {
  avatar?: string | null;
  name: string;
  onUpdate?: (avatar:string)=>void;
};


export default function ProfileAvatar({
  avatar,
  name,
  onUpdate
}: Props) {


  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading,setUploading] = useState(false);



  const initials =
    name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase();



  async function uploadImage(
    e:React.ChangeEvent<HTMLInputElement>
  ){


    const file = e.target.files?.[0];


    if(!file) return;



    const formData = new FormData();

    formData.append(
      "file",
      file
    );



    setUploading(true);



    try {


      const res = await fetch(
        "/api/profile/avatar",
        {
          method:"POST",
          body:formData,
          credentials:"include"
        }
      );



      const data = await res.json();



      if(res.ok){

        onUpdate?.(
          data.avatar
        );

      }



    } catch(error){

      console.log(error);

    }
    finally{

      setUploading(false);

    }

  }




  return (

    <div className="
      relative
      w-32
      h-32
      group
    ">


      <div className="
        w-full
        h-full
        rounded-full
        overflow-hidden
        border-4
        border-[#D4AF37]
        bg-white
        shadow-xl
        flex
        items-center
        justify-center
      ">


      {
        avatar ? (

          <Image

          src={avatar}

          alt={name}

          fill

          className="
          object-cover
          "

          />

        ) : (

          <span className="
          text-4xl
          font-bold
          text-[#0F172A]
          ">
            {initials}
          </span>

        )

      }


      </div>



      <button

      type="button"

      onClick={() =>
        inputRef.current?.click()
      }

      className="
      absolute
      bottom-1
      right-1
      bg-[#D4AF37]
      text-black
      w-10
      h-10
      rounded-full
      shadow-lg
      flex
      items-center
      justify-center
      hover:scale-110
      transition
      "

      >

      📷

      </button>



      <input

      ref={inputRef}

      type="file"

      accept="image/*"

      hidden

      onChange={uploadImage}

      />



      {
        uploading && (

          <div className="
          absolute
          inset-0
          bg-black/50
          rounded-full
          flex
          items-center
          justify-center
          text-white
          text-sm
          ">
            Uploading...
          </div>

        )
      }


    </div>

  );

}