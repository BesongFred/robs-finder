import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { findUserByEmail, updateUser } from "@/lib/auth";


// GET PROFILE
export async function GET() {

  try {

    const cookieStore = await cookies();

    const token = cookieStore.get("tambe_token")?.value;


    if (!token) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }


    const decoded: any = verifyToken(token);


   const user = await findUserByEmail(decoded.email);


    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }


    return NextResponse.json({
      user
    });


  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );

  }
}



// UPDATE PROFILE
export async function PUT(req: Request) {

  try {

    const cookieStore = await cookies();

    const token = cookieStore.get("tambe_token")?.value;


    if (!token) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }


    const decoded: any = verifyToken(token);


    const existingUser = findUserByEmail(decoded.email);


    if (!existingUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }


    const body = await req.json();


    const updated = updateUser(decoded.email, {

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