import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { verifyToken } from "@/lib/jwt";
import {
  findUserByEmail,
  verifyPassword,
  updateUserPassword,
} from "@/lib/auth";


export async function POST(req: Request) {


  try {


    const cookieStore = await cookies();


    const token =
      cookieStore.get("tambe_token")?.value;



    if (!token) {

      return NextResponse.json(
        {
          message:"Not authenticated"
        },
        {
          status:401
        }
      );

    }



    const decoded:any =
      verifyToken(token);



    const body =
      await req.json();



    const {
      currentPassword,
      newPassword
    } = body;




    if(!currentPassword || !newPassword){

      return NextResponse.json(
        {
          message:"All fields are required"
        },
        {
          status:400
        }
      );

    }




    const user =
      await findUserByEmail(
        decoded.email
      );



    if(!user){

      return NextResponse.json(
        {
          message:"User not found"
        },
        {
          status:404
        }
      );

    }




    const passwordCorrect =
      await verifyPassword(
        currentPassword,
        user.password
      );



    if(!passwordCorrect){

      return NextResponse.json(
        {
          message:"Current password is incorrect"
        },
        {
          status:400
        }
      );

    }




    await updateUserPassword(
      decoded.email,
      newPassword
    );




    return NextResponse.json({

      message:
      "Password changed successfully"

    });



  } catch(error){


    console.error(error);


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