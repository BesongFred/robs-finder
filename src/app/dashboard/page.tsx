import Link from "next/link";
import LogoutButton from "@/components/auth/LogoutButton";
import TotalBookings from "@/components/dashboard/TotalBookings";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="rounded-3xl bg-[#0F172A] p-8 text-white shadow-xl sm:p-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Rob's Finder
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Welcome to your Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-slate-300">
            Manage your reservations, profile, favorite rooms,
            and Rob's Finder account from one place.
          </p>

          <div className="mt-6">
            <LogoutButton />
          </div>

        </div>

        {/* Dashboard Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Total Bookings */}
          <TotalBookings />

          {/* Profile */}
          <Link
            href="/profile"
            className="group rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A]">
              <span className="text-2xl">
                👤
              </span>
            </div>

            <h2 className="mt-6 text-xl font-semibold text-slate-800">
              Profile
            </h2>

            <p className="mt-2 text-slate-500">
              View and manage your account.
            </p>

            <p className="mt-6 font-semibold text-[#0F172A] group-hover:text-[#D4AF37]">
              Manage Profile →
            </p>

          </Link>

          {/* Favorites */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A]">
              <span className="text-2xl">
                ⭐
              </span>
            </div>

            <h2 className="mt-6 text-xl font-semibold text-slate-800">
              Favorite Rooms
            </h2>

            <p className="mt-2 text-slate-500">
              Save your favorite rooms for later.
            </p>

            <p className="mt-6 font-semibold text-slate-400">
              Coming soon...
            </p>

          </div>

          {/* Settings */}
          <Link
            href="/settings"
            className="group rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A]">
              <span className="text-2xl">
                ⚙️
              </span>
            </div>

            <h2 className="mt-6 text-xl font-semibold text-slate-800">
              Settings
            </h2>

            <p className="mt-2 text-slate-500">
              Manage your account settings.
            </p>

            <p className="mt-6 font-semibold text-[#0F172A] group-hover:text-[#D4AF37]">
              Open Settings →
            </p>

          </Link>

        </div>

      </div>

    </main>
  );
}