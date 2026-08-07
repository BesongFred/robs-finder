import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("tambe_token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Not authenticated",
        },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token) as {
      id: string;
      email: string;
    } | null;

    if (!decoded) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired token",
        },
        { status: 401 }
      );
    }

    const { data: bookings, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("user_id", decoded.id)
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error("Bookings query error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Failed to load bookings",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      bookings: bookings ?? [],
      totalBookings: bookings?.length ?? 0,
    });
  } catch (error) {
    console.error("Bookings GET error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("tambe_token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Not authenticated",
        },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token) as {
      id: string;
      email: string;
    } | null;

    if (!decoded) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired token",
        },
        { status: 401 }
      );
    }

    const body = await req.json();

    const {
      roomId,
      checkIn,
      checkOut,
      guests,
    } = body;

    if (
      !roomId ||
      !checkIn ||
      !checkOut ||
      !guests
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All booking fields are required.",
        },
        { status: 400 }
      );
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (
      Number.isNaN(checkInDate.getTime()) ||
      Number.isNaN(checkOutDate.getTime())
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid booking dates.",
        },
        { status: 400 }
      );
    }

    if (checkOutDate <= checkInDate) {
      return NextResponse.json(
        {
          success: false,
          message: "Check-out must be after check-in.",
        },
        { status: 400 }
      );
    }

    if (Number(guests) < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "At least one guest is required.",
        },
        { status: 400 }
      );
    }

    // Get selected room
    const {
      data: room,
      error: roomError,
    } = await supabase
      .from("rooms")
      .select("*")
      .eq("id", roomId)
      .single();

    if (roomError || !room) {
      return NextResponse.json(
        {
          success: false,
          message: "Room not found.",
        },
        { status: 404 }
      );
    }

    // Check guest capacity
    if (Number(guests) > room.capacity) {
      return NextResponse.json(
        {
          success: false,
          message: `This room can accommodate a maximum of ${room.capacity} guests.`,
        },
        { status: 400 }
      );
    }

    // Calculate number of nights
    const millisecondsPerDay =
      1000 * 60 * 60 * 24;

    const nights = Math.ceil(
      (checkOutDate.getTime() -
        checkInDate.getTime()) /
        millisecondsPerDay
    );

    const totalAmount =
      nights * Number(room.price_per_night);

    // Check if room is already booked
    const {
      data: existingBookings,
      error: availabilityError,
    } = await supabase
      .from("bookings")
      .select("id")
      .eq("room_id", roomId)
      .in("status", ["pending", "confirmed"])
      .lt("check_in", checkOut)
      .gt("check_out", checkIn);

    if (availabilityError) {
      console.error(
        "Availability error:",
        availabilityError
      );

      return NextResponse.json(
        {
          success: false,
          message: "Unable to check room availability.",
        },
        { status: 500 }
      );
    }

    if (
      existingBookings &&
      existingBookings.length > 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This room is already booked for those dates.",
        },
        { status: 409 }
      );
    }

    // Create booking for authenticated user
    const {
      data: booking,
      error: bookingError,
    } = await supabase
      .from("bookings")
      .insert({
        user_id: decoded.id,
        room_id: room.id,
        room_name: room.name,
        check_in: checkIn,
        check_out: checkOut,
        guests: Number(guests),
        total_amount: totalAmount,
        status: "pending",
      })
      .select()
      .single();

    if (bookingError) {
      console.error(
        "Create booking error:",
        bookingError
      );

      return NextResponse.json(
        {
          success: false,
          message: "Failed to create booking.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking created successfully.",
        booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Bookings POST error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Server error.",
      },
      { status: 500 }
    );
  }
}