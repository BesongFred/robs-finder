import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import {
  findUserByEmail,
  updateUser,
} from "@/lib/auth";

export async function PUT(req: NextRequest) {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("tambe_token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token) as {
      email: string;
    } | null;

    if (!decoded) {
      return NextResponse.json(
        { message: "Invalid token" },
        { status: 401 }
      );
    }

    const existingUser = await findUserByEmail(decoded.email);

    if (!existingUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const body = await req.json();

    const updated = await updateUser(decoded.email, {
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
    });

    return NextResponse.json({
      message: "Profile updated successfully",
      user: updated,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}