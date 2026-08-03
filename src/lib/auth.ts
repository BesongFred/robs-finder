import bcrypt from "bcryptjs";
import { getUsers } from "@/lib/db";
import { supabase } from "@/lib/supabase";

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
  const hashedPassword = await hashPassword(newPassword);

  const { data, error } = await supabase
    .from("users")
    .update({
      password: hashedPassword,
    })
    .eq("email", email.toLowerCase())
    .select()
    .single();


  if (error) {
    console.error("Update password error:", error);
    return false;
  }


  return !!data;
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