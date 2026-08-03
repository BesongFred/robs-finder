import { supabase } from "./supabase";
import { User } from "@/types/user";


export async function getUsers(): Promise<User[]> {

  const { data, error } = await supabase
    .from("users")
    .select("*");


  if (error) {
    throw error;
  }


  return data.map((user:any) => ({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    phone: user.phone,
    password: user.password,
    avatar: user.avatar,
    createdAt: user.created_at
  }));

}



export async function saveUser(user: User) {

  const { data, error } = await supabase
    .from("users")
    .insert({
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      phone: user.phone,
      password: user.password,
      avatar: user.avatar
    })
    .select()
    .single();


  if (error) {
    throw error;
  }


  return data;

}
