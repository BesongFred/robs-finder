"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Users,
  BedDouble,
  Wifi,
  Car,
  Utensils,
  Waves,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

type Room = {
  id: string;
  name: string;
  description: string;
  image: string;
  price_per_night: number;
  capacity: number;
  amenities: string[];
};

export default function BookingPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState("");

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const [loadingRooms, setLoadingRooms] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Load rooms
  useEffect(() => {
    async function loadRooms() {
      try {
        setLoadingRooms(true);
        setError("");

        const response = await fetch("/api/rooms", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to load rooms."
          );
        }

        setRooms(data.rooms ?? []);
      } catch (err) {
        console.error(err);

        setError("Unable to load rooms.");
      } finally {
        setLoadingRooms(false);
      }
    }

    loadRooms();
  }, []);

  const room = rooms.find(
    (item) => item.id === selectedRoom
  );

  // Calculate nights
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) {
      return 0;
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const difference =
      end.getTime() - start.getTime();

    if (difference <= 0) {
      return 0;
    }

    return Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    );
  }, [checkIn, checkOut]);

  const totalAmount =
    room && nights > 0
      ? nights * Number(room.price_per_night)
      : 0;

  async function handleBooking(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!selectedRoom) {
      setError("Please select a room.");
      return;
    }

    if (!checkIn || !checkOut) {
      setError(
        "Please select your check-in and check-out dates."
      );
      return;
    }

    if (nights <= 0) {
      setError(
        "Check-out must be after check-in."
      );
      return;
    }

    if (!room) {
      setError("Selected room could not be found.");
      return;
    }

    if (guests > room.capacity) {
      setError(
        `This room allows a maximum of ${room.capacity} guests.`
      );
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(
        "/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            roomId: selectedRoom,
            checkIn,
            checkOut,
            guests,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to create booking."
        );
      }

      setMessage(
        "Your booking has been created successfully."
      );

      // Reset form
      setSelectedRoom("");
      setCheckIn("");
      setCheckOut("");
      setGuests(1);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src="/images/rooms/fred.JPG"
            alt="Luxury guest house"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#090909]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-36">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Rob's Finder Guest House
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Reserve Your
              <span className="text-[#D4AF37]">
                {" "}Perfect Stay
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Choose your room, select your dates,
              and create your reservation in just a
              few simple steps.
            </p>

          </div>


          {/* BOOKING CARD */}
          <div className="mt-12 rounded-3xl border border-[#D4AF37]/30 bg-black/50 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

            <div className="mb-8">

              <h2 className="text-2xl font-bold">
                Make a Reservation
              </h2>

              <p className="mt-2 text-slate-400">
                Select your preferred room and stay dates.
              </p>

            </div>


            {/* SUCCESS */}
            {message && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4">

                <CheckCircle2
                  className="mt-0.5 shrink-0 text-green-400"
                  size={22}
                />

                <div>
                  <p className="font-semibold text-green-300">
                    Booking Successful
                  </p>

                  <p className="mt-1 text-sm text-green-200/80">
                    {message}
                  </p>
                </div>

              </div>
            )}


            {/* ERROR */}
            {error && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">

                <AlertCircle
                  className="mt-0.5 shrink-0 text-red-400"
                  size={22}
                />

                <p className="text-sm text-red-300">
                  {error}
                </p>

              </div>
            )}


            <form
              onSubmit={handleBooking}
              className="space-y-8"
            >

              {/* ROOMS */}
              <div>

                <label className="mb-4 block text-sm font-semibold text-slate-200">
                  Select Your Room
                </label>

                {loadingRooms ? (

                  <div className="grid gap-4 md:grid-cols-3">

                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="h-52 animate-pulse rounded-2xl bg-white/10"
                      />
                    ))}

                  </div>

                ) : (

                  <div className="grid gap-4 md:grid-cols-3">

                    {rooms.map((item) => {

                      const selected =
                        selectedRoom === item.id;

                      return (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => {
                            setSelectedRoom(item.id);

                            if (
                              guests >
                              item.capacity
                            ) {
                              setGuests(
                                item.capacity
                              );
                            }

                            setError("");
                          }}
                          className={`overflow-hidden rounded-2xl border text-left transition ${
                            selected
                              ? "border-[#D4AF37] bg-[#D4AF37]/10 shadow-lg shadow-[#D4AF37]/10"
                              : "border-white/10 bg-white/5 hover:border-[#D4AF37]/50"
                          }`}
                        >

                          <div className="relative h-36">

                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30" />

                            {selected && (
                              <div className="absolute right-3 top-3 rounded-full bg-[#D4AF37] p-1.5 text-black">
                                <CheckCircle2
                                  size={18}
                                />
                              </div>
                            )}

                          </div>


                          <div className="p-4">

                            <div className="flex items-start justify-between gap-3">

                              <h3 className="font-bold">
                                {item.name}
                              </h3>

                              <span className="whitespace-nowrap text-sm font-semibold text-[#D4AF37]">
                                ${item.price_per_night}/night
                              </span>

                            </div>

                            <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                              {item.description}
                            </p>

                            <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                              <Users size={14} />
                              Up to {item.capacity} guests
                            </div>

                          </div>

                        </button>
                      );
                    })}

                  </div>
                )}

              </div>


              {/* DATES + GUESTS */}
              <div className="grid gap-5 md:grid-cols-3">

                <div>

                  <label
                    htmlFor="checkIn"
                    className="mb-2 block text-sm font-semibold text-slate-200"
                  >
                    Check-In
                  </label>

                  <div className="relative">

                    <CalendarDays
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                    />

                    <input
                      id="checkIn"
                      type="date"
                      value={checkIn}
                      min={
                        new Date()
                          .toISOString()
                          .split("T")[0]
                      }
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                        setError("");
                      }}
                      className="w-full rounded-xl border border-white/10 bg-white/10 px-12 py-3 text-white outline-none transition focus:border-[#D4AF37]"
                    />

                  </div>

                </div>


                <div>

                  <label
                    htmlFor="checkOut"
                    className="mb-2 block text-sm font-semibold text-slate-200"
                  >
                    Check-Out
                  </label>

                  <div className="relative">

                    <CalendarDays
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                    />

                    <input
                      id="checkOut"
                      type="date"
                      value={checkOut}
                      min={
                        checkIn ||
                        new Date()
                          .toISOString()
                          .split("T")[0]
                      }
                      onChange={(e) => {
                        setCheckOut(e.target.value);
                        setError("");
                      }}
                      className="w-full rounded-xl border border-white/10 bg-white/10 px-12 py-3 text-white outline-none transition focus:border-[#D4AF37]"
                    />

                  </div>

                </div>


                <div>

                  <label
                    htmlFor="guests"
                    className="mb-2 block text-sm font-semibold text-slate-200"
                  >
                    Guests
                  </label>

                  <div className="relative">

                    <Users
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                    />

                    <select
                      id="guests"
                      value={guests}
                      onChange={(e) => {
                        setGuests(
                          Number(e.target.value)
                        );
                        setError("");
                      }}
                      className="w-full appearance-none rounded-xl border border-white/10 bg-white/10 px-12 py-3 text-white outline-none transition focus:border-[#D4AF37]"
                    >

                      {[1, 2, 3, 4].map(
                        (number) => (
                          <option
                            key={number}
                            value={number}
                            className="bg-[#0F172A]"
                          >
                            {number}{" "}
                            {number === 1
                              ? "Guest"
                              : "Guests"}
                          </option>
                        )
                      )}

                    </select>

                  </div>

                </div>

              </div>


              {/* SUMMARY */}
              {room && nights > 0 && (
                <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

                  <div className="flex items-center gap-3">

                    <BedDouble
                      className="text-[#D4AF37]"
                      size={24}
                    />

                    <div>
                      <p className="font-semibold">
                        {room.name}
                      </p>

                      <p className="text-sm text-slate-400">
                        {nights}{" "}
                        {nights === 1
                          ? "night"
                          : "nights"}{" "}
                        × $
                        {room.price_per_night}
                      </p>
                    </div>

                  </div>


                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">

                    <span className="text-slate-400">
                      Estimated Total
                    </span>

                    <span className="text-3xl font-bold text-[#D4AF37]">
                      ${totalAmount.toFixed(2)}
                    </span>

                  </div>

                </div>
              )}


              {/* SUBMIT */}
              <button
                type="submit"
                disabled={
                  submitting ||
                  loadingRooms
                }
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#D4AF37] px-6 py-4 font-bold text-[#0F172A] transition hover:bg-[#f1c75b] disabled:cursor-not-allowed disabled:opacity-50"
              >

                {submitting
                  ? "Creating Booking..."
                  : "Confirm Booking"}

                {!submitting && (
                  <ArrowRight size={20} />
                )}

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* AMENITIES */}
      <section className="border-t border-white/10 bg-black px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Enjoy Your Stay
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Every stay at Rob's Finder comes with
            carefully selected amenities designed for
            your comfort.
          </p>


          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">

            {[
              {
                icon: Wifi,
                name: "Free WiFi",
              },
              {
                icon: Utensils,
                name: "Restaurant",
              },
              {
                icon: Car,
                name: "Parking",
              },
              {
                icon: BedDouble,
                name: "Room Service",
              },
              {
                icon: Waves,
                name: "Swimming Pool",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-[#D4AF37]/40"
                >

                  <Icon
                    size={30}
                    className="mx-auto text-[#D4AF37]"
                  />

                  <p className="mt-4 text-sm text-slate-300">
                    {item.name}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* FOOTER CTA */}
      <section className="bg-[#0F172A] px-6 py-16 text-center">

        <h2 className="text-3xl font-bold">
          Need Help With Your Stay?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-slate-400">
          Explore our rooms or contact us if you
          need assistance choosing the perfect stay.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            href="/rooms"
            className="rounded-xl bg-[#D4AF37] px-7 py-3 font-semibold text-[#0F172A] hover:bg-[#f1c75b]"
          >
            Explore Rooms
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
}