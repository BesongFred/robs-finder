import Link from "next/link";
import LogoutButton from "@/components/auth/LogoutButton";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Hero */}
        <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-xl">
          <h1 className="text-4xl font-bold">
            Welcome to Rob's Finder
          </h1>

          <p className="mt-3 text-slate-300">
            Your luxury guest house dashboard.
          </p>

          <div className="mt-6">
            <LogoutButton />
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <Link
            href="/profile"
            className="rounded-3xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold">👤 Profile</h2>

            <p className="mt-2 text-slate-600">
              View and manage your account.
            </p>
          </Link>

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">🏨 Bookings</h2>

            <p className="mt-2 text-slate-600">
              Coming soon...
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">⭐ Favorites</h2>

            <p className="mt-2 text-slate-600">
              Coming soon...
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">⚙️ Settings</h2>

            <p className="mt-2 text-slate-600">
              Coming soon...
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}