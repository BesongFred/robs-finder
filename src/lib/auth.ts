import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import { getUsers, saveUsers } from "./db";


// const JWT_SECRET =
  // process.env.JWT_SECRET || "tambe-secret-key";


export async function findUserByEmail(email: string) {

  const users = getUsers();

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

  const users = getUsers();

  const userIndex = users.findIndex(
    (user) =>
      user.email === email.toLowerCase()
  );


  if (userIndex === -1) {
    return false;
  }


  users[userIndex].password =
    await hashPassword(newPassword);


  saveUsers(users);


  return true;

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
  const users = getUsers();

  const index = users.findIndex(
    (user) => user.email === email.toLowerCase()
  );

  if (index === -1) {
    return null;
  }

  users[index] = {
    ...users[index],
    ...updates,
  };

  saveUsers(users);

  return users[index];
}
