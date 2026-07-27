"use client";

import { ButtonHTMLAttributes } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface AuthButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function AuthButton({
  children,
  loading = false,
  className = "",
  disabled,
  ...props
}: AuthButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`
        w-full
        rounded-2xl
        bg-[#0F172A]
        px-6
        py-4
        text-white
        font-semibold
        transition-all
        duration-300
        hover:bg-[#1E3A8A]
        hover:shadow-xl
        disabled:opacity-70
        disabled:cursor-not-allowed
        flex
        items-center
        justify-center
        gap-2
        ${className}
      `}
    >
      {loading && <LoadingSpinner size={18} />}
      {children}
    </button>
  );
}