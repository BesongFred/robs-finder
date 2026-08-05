import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function POST(req: Request) {

  try {

    const body = await req.json();


    const {
      fullName,
      email,
      phone,
      subject,
      message,
    } = body;



    // Validation

    if (
      !fullName ||
      !email ||
      !subject ||
      !message
    ) {

      return NextResponse.json(
        {
          message: "Please fill all required fields"
        },
        {
          status: 400
        }
      );

    }



    // Save message to Supabase

    const { data, error } = await supabase
      .from("contact_messages")
      .insert([
        {
          full_name: fullName,
          email,
          phone,
          subject,
          message,
        }
      ])
      .select()
      .single();



    if (error) {

      console.error(
        "Contact save error:",
        error
      );


      return NextResponse.json(
        {
          message: "Failed to send message"
        },
        {
          status: 500
        }
      );

    }



    return NextResponse.json(
      {
        message: "Message sent successfully",
        data
      },
      {
        status: 201
      }
    );



  } catch(error) {


    console.error(
      "Contact API error:",
      error
    );


    return NextResponse.json(
      {
        message: "Server error"
      },
      {
        status:500
      }
    );


  }

}