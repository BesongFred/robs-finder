import { NextResponse } from "next/server";
import { updateUserPassword } from "@/lib/auth";


export async function POST(req: Request) {

  try {

    const {
      email,
      password
    } = await req.json();


    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Email and password are required"
        },
        {
          status:400
        }
      );
    }


    const updated =
      await updateUserPassword(
        email,
        password
      );


    if (!updated) {
      return NextResponse.json(
        {
          message:"User not found"
        },
        {
          status:404
        }
      );
    }


    return NextResponse.json({
      ok:true,
      message:"Password updated successfully"
    });


  } catch(error) {

    return NextResponse.json(
      {
        message:"Server error"
      },
      {
        status:500
      }
    );

  }

}