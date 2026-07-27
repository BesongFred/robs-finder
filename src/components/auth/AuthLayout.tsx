"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: Props) {
  return (
    <main
      className="
        min-h-screen
        bg-[#F8FAFC]
        relative
        overflow-hidden
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0F172A] opacity-95" />

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 w-full flex justify-center"
      >
        {children}
      </motion.div>
    </main>
  );
}