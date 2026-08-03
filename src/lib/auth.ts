import bcrypt from "bcryptjs";
import { getUsers } from "@/lib/db";

export async function findUserByEmail(email: string) {
  const users = await getUsers();

  return users.find(
    (user) => user.email === email.toLowerCase()
  );
}

export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string
) {
  return bcrypt.compare(
    plainPassword,
    hashedPassword
  );
}

export async function hashPassword(
  password: string
) {
  return bcrypt.hash(
    password,
    10
  );
}

// TODO: Replace with Supabase UPDATE query
export async function updateUserPassword(
  email: string,
  newPassword: string
) {
  throw new Error(
    "updateUserPassword is not implemented yet. Migrate this function to Supabase."
  );
}

// TODO: Replace with Supabase UPDATE query
export async function updateUser(
  email: string,
  updates: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    avatar?: string;
  }
) {
  throw new Error(
    "updateUser is not implemented yet. Migrate this function to Supabase."
  );
}