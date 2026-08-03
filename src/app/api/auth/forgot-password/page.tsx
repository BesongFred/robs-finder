import { NextResponse } from "next/server"
import { findUserByEmail } from "@/lib/auth"
import crypto from "crypto"


export async function POST(req: Request) {

  try {

    const { email } = await req.json()


    const user = await findUserByEmail(email)


    if (!user) {
      return NextResponse.json(
        {
          message:"Email not found"
        },
        {
          status:404
        }
      )
    }


    const resetToken = crypto
      .randomBytes(32)
      .toString("hex")


    console.log(
      "RESET TOKEN:",
      resetToken
    )


    return NextResponse.json({
      ok:true,
      message:
      "Reset link generated. Check server console."
    })


  } catch(error){

    return NextResponse.json(
      {
        message:"Server error"
      },
      {
        status:500
      }
    )

  }

}
