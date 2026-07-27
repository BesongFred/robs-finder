import fs from "fs";
import path from "path";
import { User } from "@/types/user";


const filePath = path.join(
  process.cwd(),
  "src/data/users.json"
);


export function getUsers(): User[] {

  const file = fs.readFileSync(
    filePath,
    "utf-8"
  );

  return JSON.parse(file);

}



export function saveUsers(users: User[]) {

  fs.writeFileSync(
    filePath,
    JSON.stringify(users, null, 2)
  );

}
