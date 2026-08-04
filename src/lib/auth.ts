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


  return !!data;

}




export async function updateUser(
  email: string,
  updates: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    avatar?: string;
  }
) {


  const updateData:any = {};


  if (updates.firstName)
    updateData.first_name = updates.firstName;


  if (updates.lastName)
    updateData.last_name = updates.lastName;


  if (updates.phone)
    updateData.phone = updates.phone;


  if (updates.avatar)
    updateData.avatar = updates.avatar;



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



  if(error){

    console.error(
      "Update user error:",
      error
    );

    return null;

  }



  return data;

}