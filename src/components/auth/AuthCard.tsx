"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthCard({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="
        w-full
        max-w-md
        rounded-3xl
        bg-white
        p-8
        shadow-2xl
      "
    >
      <h1 className="text-3xl font-bold text-[#0F172A]">
        {title}
      </h1>

      <p className="mt-2 text-gray-500">
        {subtitle}
      </p>

      <div className="mt-8">
        {children}
      </div>
    </motion.div>
  );
}