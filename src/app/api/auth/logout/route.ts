import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({
    ok: true,
    message: "Logged out successfully",
  })

  response.cookies.set("tambe_token", "", {
    httpOnly: true,
    expires: new Date(0),
    sameSite: "lax",
    path: "/",
  })

  return response
}