"use client";

import { useState } from "react";


type User = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string | null;
};



export default function EditProfileForm({
  user,
  onUpdate,
}: {
  user: User;
  onUpdate: (user: User) => void;
}) {


  const [form, setForm] = useState({

    firstName: user.firstName || "",

    lastName: user.lastName || "",

    phone: user.phone || "",

  });


  const [loading,setLoading] = useState(false);

  const [message,setMessage] = useState("");



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ){

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  }



  async function handleSubmit(
    e: React.FormEvent
  ){

    e.preventDefault();


    setLoading(true);

    setMessage("");



    try {


      const res = await fetch(
        "/api/profile",
        {
          method:"PUT",

          headers:{
            "Content-Type":"application/json",
          },

          credentials:"include",

          body:JSON.stringify(form),
        }
      );



      const data = await res.json();



      if(!res.ok){

        throw new Error(
          data.message || "Update failed"
        );

      }



      onUpdate(data.user);


      setMessage(
        "Profile updated successfully"
      );



    } catch(error:any){

      setMessage(
        error.message
      );

    } finally {

      setLoading(false);

    }

  }




  return (

    <div className="
      bg-white
      rounded-3xl
      shadow-lg
      border
      border-gray-100
      p-6
      md:p-8
    ">


      <h2 className="
        text-2xl
        font-bold
        text-[#0F172A]
        mb-6
      ">
        Edit Profile
      </h2>



      <form
        onSubmit={handleSubmit}
        className="
          space-y-5
        "
      >


        <Input
          label="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />



        <Input
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />



        <Input
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />



        <div>

          <label className="
            text-sm
            font-medium
            text-gray-600
          ">
            Email
          </label>


          <input

            value={user.email}

            disabled

            className="
              mt-2
              w-full
              rounded-xl
              bg-gray-100
              border
              border-gray-200
              px-4
              py-3
              text-gray-500
            "

          />

        </div>




        <button

          disabled={loading}

          className="
            w-full
            bg-[#D4AF37]
            hover:bg-[#b89424]
            text-black
            font-bold
            py-3
            rounded-xl
            transition
            disabled:opacity-50
          "

        >

          {
            loading
            ? "Saving..."
            : "Save Changes"
          }


        </button>



        {
          message && (

            <p className="
              text-center
              text-sm
              font-medium
              text-[#1E3A8A]
            ">
              {message}
            </p>

          )
        }


      </form>


    </div>

  );

}




function Input({

label,

name,

value,

onChange,

}:{

label:string;

name:string;

value:string;

onChange:
(e:React.ChangeEvent<HTMLInputElement>)=>void;

}){


return (

<div>

<label className="
text-sm
font-medium
text-gray-600
">

{label}

</label>


<input

name={name}

value={value}

onChange={onChange}

className="
mt-2
w-full
rounded-xl
border
border-gray-200
px-4
py-3
outline-none
focus:border-[#D4AF37]
focus:ring-2
focus:ring-[#D4AF37]/20
transition
"

/>

</div>

);


}