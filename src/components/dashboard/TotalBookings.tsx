"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarCheck, ArrowRight } from "lucide-react";

type BookingsResponse = {
  success: boolean;
  bookings?: unknown[];
  totalBookings?: number;
  message?: string;
};

export default function TotalBookings() {
  const [totalBookings, setTotalBookings] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadBookings() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/bookings", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        const data: BookingsResponse = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Failed to load bookings."
          );
        }

        if (mounted) {
          setTotalBookings(data.totalBookings ?? 0);
        }
      } catch (error) {
        console.error("Total bookings error:", error);

        if (mounted) {
          setError("Unable to load bookings.");
          setTotalBookings(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadBookings();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="group rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A]">
        <CalendarCheck
          size={28}
          className="text-[#D4AF37]"
        />
      </div>

      {/* Title */}
      <h2 className="mt-6 text-xl font-semibold text-slate-800">
        Total Bookings
      </h2>

      {/* Number / Loading / Error */}
      {loading ? (
        <div className="mt-3">
          <div className="h-10 w-16 animate-pulse rounded-lg bg-slate-200" />
        </div>
      ) : error ? (
        <p className="mt-3 text-sm font-medium text-red-500">
          {error}
        </p>
      ) : (
        <p className="mt-3 text-4xl font-bold text-[#0F172A]">
          {totalBookings}
        </p>
      )}

      {/* Description */}
      <p className="mt-2 text-sm text-slate-500">
        {totalBookings === 0 && !loading && !error
          ? "No reservations yet"
          : "All reservations made"}
      </p>

      {/* Action */}
      <Link
        href="/booking"
        className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0F172A] transition hover:text-[#D4AF37]"
      >
        View Bookings
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}