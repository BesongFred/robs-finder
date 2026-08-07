"use client";

import UserWelcome from "@/components/auth/UserWelcome";
import LogoutButton from "@/components/auth/LogoutButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/home" },
  { name: "Rooms", href: "/rooms" },
  { name: "Gallery", href: "/gallery" },
  { name: "Amenities", href: "/amenities" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);


  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A]/95 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >

      <div className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-between
        px-6
      ">


        <Link
          href="/home"
          className="
            text-2xl
            font-bold
            tracking-wide
            text-white
          "
        >
          Rob's Finder
        </Link>



        <nav className="
          hidden
          items-center
          gap-8
          lg:flex
        ">

          {links.map((link)=>(
            <Link
              key={link.name}
              href={link.href}
              className="
                text-sm
                font-medium
                text-white
                transition
                hover:text-[#D4AF37]
              "
            >
              {link.name}
            </Link>
          ))}

        </nav>



        <div className="
          hidden
          items-center
          gap-5
          lg:flex
        ">

          <UserWelcome />


          <Link
            href="/profile"
            className="
              rounded-lg
              border
              border-white
              px-5
              py-2
              text-white
              transition
              hover:border-[#D4AF37]
              hover:text-[#D4AF37]
            "
          >
            Profile
          </Link>


          <LogoutButton />

        </div>




        <button
          onClick={()=>setMobileOpen(!mobileOpen)}
          className="
            text-white
            lg:hidden
          "
        >
          {
            mobileOpen
            ? <X size={28}/>
            : <Menu size={28}/>
          }
        </button>


      </div>



      <AnimatePresence>

      {
        mobileOpen && (

          <motion.div
            initial={{
              opacity:0,
              height:0
            }}
            animate={{
              opacity:1,
              height:"auto"
            }}
            exit={{
              opacity:0,
              height:0
            }}
            className="
              bg-[#0F172A]
              lg:hidden
            "
          >

            <div className="
              space-y-5
              px-6
              py-6
            ">


              <UserWelcome />


              {
                links.map((link)=>(
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={()=>setMobileOpen(false)}
                    className="
                      block
                      text-white
                      hover:text-[#D4AF37]
                    "
                  >
                    {link.name}
                  </Link>
                ))
              }


              <Link
                href="/profile"
                className="
                  block
                  rounded-lg
                  border
                  border-white
                  py-3
                  text-center
                  text-white
                "
              >
                Profile
              </Link>


              <LogoutButton />


            </div>


          </motion.div>

        )
      }

      </AnimatePresence>


    </motion.header>
  );
}