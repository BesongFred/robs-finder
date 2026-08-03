"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SigninPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

    const data = await response.json();

console.log("Status:", response.status);
console.log("Response:", data);

if (!response.ok) {
  setMessage(data.message);
  return;
}

console.log("Login successful, redirecting...");

router.replace("/");
    } catch {
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="mt-3 text-slate-600">
          Sign in to your Rob's Finder account.
        </p>

        {message && (
          <div className="mt-4 rounded-xl bg-red-50 p-3 text-red-700">
            {message}
          </div>
        )}

        <div className="mt-6 space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <div className="flex justify-between text-sm">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            <Link
              href="/auth/forgot-password"
              className="text-blue-900"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-xl bg-blue-900 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?
          <Link
            href="/auth/signup"
            className="ml-2 font-semibold text-blue-900"
          >
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}