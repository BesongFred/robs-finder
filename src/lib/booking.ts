import fs from "fs";
import path from "path";

import { Booking } from "@/types/booking";


const filePath =
  path.join(
    process.cwd(),
    "src/data/bookings.json"
  );



export function getBookings(): Booking[] {

  if (!fs.existsSync(filePath)) {

    fs.writeFileSync(
      filePath,
      "[]"
    );

  }


  const data =
    fs.readFileSync(
      filePath,
      "utf-8"
    );


  return JSON.parse(data);

}




export function saveBookings(
  bookings: Booking[]
){

  fs.writeFileSync(
    filePath,
    JSON.stringify(
      bookings,
      null,
      2
    )
  );

}