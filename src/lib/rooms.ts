import fs from "fs";
import path from "path";

import { Room } from "@/types/room";


const filePath =
path.join(
  process.cwd(),
  "src/data/rooms.json"
);



export function getRooms(): Room[] {

  const data =
    fs.readFileSync(
      filePath,
      "utf-8"
    );


  return JSON.parse(data);

}