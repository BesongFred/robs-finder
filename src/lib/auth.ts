import bcrypt from "bcryptjs";
import { getUsers } from "@/lib/db";
import { supabase } from "@/lib/supabase";


// FIND USER BY EMAIL
export async function findUserByEmail(email: string) {

  const users = await getUsers();

  return users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase()
  );

}


// VERIFY PASSWORD
export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string
) {

  return bcrypt.compare(
    plainPassword,
    hashedPassword
  );

}


// HASH PASSWORD
export async function hashPassword(
  password: string
) {

  return bcrypt.hash(
    password,
    10
  );

}


// UPDATE PASSWORD
export async function updateUserPassword(
  email: string,
  newPassword: string
) {

  const hashedPassword =
    await hashPassword(newPassword);


  const { data, error } =
    await supabase
      .from("users")
      .update({
        password: hashedPassword,
      })
      .eq(
        "email",
        email.toLowerCase()
      )
      .select()
      .single();


  if (error) {

    console.error(
      "Update password error:",
      error
    );

    return false;

  }


  return {
    id: data.id,
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    phone: data.phone,
    avatar: data.avatar,
    createdAt: data.created_at
  };

}



// UPDATE USER PROFILE
export async function updateUser(
  email: string,
  updates: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    avatar?: string;
  }
) {


  const updateData: any = {};


  if (updates.firstName) {
    updateData.first_name = updates.firstName;
  }


  if (updates.lastName) {
    updateData.last_name = updates.lastName;
  }


  if (updates.phone) {
    updateData.phone = updates.phone;
  }


  if (updates.avatar) {
    updateData.avatar = updates.avatar;
  }



  const { data, error } =
    await supabase
      .from("users")
      .update(updateData)
      .eq(
        "email",
        email.toLowerCase()
      )
      .select()
      .single();



  if (error) {

    console.error(
      "Update user error:",
      error
    );

    return null;

  }


  return data;

}