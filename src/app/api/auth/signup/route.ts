import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// import { getUsers, saveUsers } from "@/lib/db";
import { getUsers, saveUser } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      password,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password
    ) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

  const users = await getUsers();

    const existingUser = users.find(
      (user) => user.email === email.toLowerCase()
    );

    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    const newUser = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      email: email.toLowerCase(),
      phone,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);

   await saveUser(newUser);

    return NextResponse.json(
      {
        message: "Account created successfully",
      },
      {
        status: 201,
      }
    );
} catch (error) {
  console.error("Signup Error:", error);

  return NextResponse.json(
    {
      error:
        error instanceof Error
          ? error.stack
          : String(error),
    },
    {
      status: 500,
    }
  );
}
}