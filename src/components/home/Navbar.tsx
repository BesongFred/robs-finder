"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
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

    return () => window.removeEventListener("scroll", handleScroll);
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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="text-2xl font-bold tracking-wide text-white">
          Rob's Finder
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white transition hover:text-[#D4AF37]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/auth/signin"
            className="rounded-lg border border-white px-5 py-2 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            Login
          </Link>

          <Link
            href="/auth/signup"
            className="rounded-lg bg-[#D4AF37] px-5 py-2 font-semibold text-[#0F172A] transition hover:scale-105"
          >
            Create Account
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#0F172A] lg:hidden"
          >
            <div className="space-y-5 px-6 py-6">

              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white hover:text-[#D4AF37]"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-700">

                <Link
                  href="/auth/signin"
                  className="block rounded-lg border border-white py-3 text-center text-white"
                >
                  Login
                </Link>

                <Link
                  href="/auth/signup"
                  className="mt-3 block rounded-lg bg-[#D4AF37] py-3 text-center font-semibold text-[#0F172A]"
                >
                  Create Account
                </Link>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}