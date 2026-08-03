import { NextResponse } from "next/server";
import { findUserByEmail, verifyPassword } from "@/lib/auth";
import { createToken } from "@/lib/jwt";

export async function POST(req: Request) {

  try {

    const { email, password } = await req.json();


    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }


    const user = await findUserByEmail(email);


    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }


    const validPassword = await verifyPassword(
      password,
      user.password
    );


    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }


    const token = createToken({
      id: user.id,
      email: user.email,
    });


    const response = NextResponse.json({
      message: "Login successful.",
    });


    response.cookies.set(
      "tambe_token",
      token,
      {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      }
    );


    return response;


  } catch {

    return NextResponse.json(
      { message: "Server error." },
      { status: 500 }
    );

  }

}