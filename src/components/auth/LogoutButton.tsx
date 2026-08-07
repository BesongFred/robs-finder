"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {

  const router = useRouter();


  async function logout(){

    await fetch("/api/auth/logout", {
      method:"POST",
    });


    router.replace("/auth/signin");

  }


  return (
    <button
      onClick={logout}
      className="
        rounded-lg
        bg-red-500
        px-5
        py-2
        font-semibold
        text-white
        hover:bg-red-600
      "
    >
      Logout
    </button>
  );
}