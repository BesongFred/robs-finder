import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";
import { updateUser } from "@/lib/auth";


export async function POST(req: Request) {

  try {


    const cookieStore = await cookies();

    const token = cookieStore.get("tambe_token")?.value;


    if (!token) {

      return NextResponse.json(
        {
          message: "Not authenticated"
        },
        {
          status: 401
        }
      );

    }



    const decoded: any = verifyToken(token);



    const formData = await req.formData();


    const file = formData.get("file") as File;



    if (!file) {

      return NextResponse.json(
        {
          message: "No file uploaded"
        },
        {
          status: 400
        }
      );

    }



    // Check image type

    if (!file.type.startsWith("image/")) {

      return NextResponse.json(
        {
          message: "Only images are allowed"
        },
        {
          status: 400
        }
      );

    }



    // Limit size 2MB

    if (file.size > 2 * 1024 * 1024) {

      return NextResponse.json(
        {
          message: "Image must be less than 2MB"
        },
        {
          status:400
        }
      );

    }



    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);



    const uploadDir = path.join(
      process.cwd(),
      "public/uploads/avatars"
    );



    // Create folder if missing

    if (!fs.existsSync(uploadDir)) {

      fs.mkdirSync(
        uploadDir,
        {
          recursive:true
        }
      );

    }



    const fileName =
      uuid() + path.extname(file.name);



    const uploadPath =
      path.join(
        uploadDir,
        fileName
      );



    fs.writeFileSync(
      uploadPath,
      buffer
    );



    const avatar =
      `/uploads/avatars/${fileName}`;



    const user = updateUser(
      decoded.email,
      {
        avatar
      }
    );



    return NextResponse.json({

      message:"Avatar uploaded",

      user

    });



  } catch(error) {


    console.error(error);


    return NextResponse.json(

      {
        message:"Upload failed"
      },

      {
        status:500
      }

    );


  }

}