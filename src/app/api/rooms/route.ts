import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data: rooms, error } = await supabase
      .from("rooms")
      .select("*")
      .order("price_per_night", {
        ascending: true,
      });

    if (error) {
      console.error("Rooms API error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to load rooms.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      rooms: rooms ?? [],
    });
  } catch (error) {
    console.error("Rooms API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error.",
      },
      {
        status: 500,
      }
    );
  }
}
