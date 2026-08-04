import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { supabase } from "@/lib/supabase";
import { updateUser } from "@/lib/auth";
import { v4 as uuid } from "uuid";


export async function POST(req: Request) {

try {


const cookieStore = await cookies();

const token =
cookieStore.get("tambe_token")?.value;



if(!token){

return NextResponse.json(
{
message:"Not authenticated"
},
{
status:401
}
);

}



const decoded:any =
verifyToken(token);



const formData =
await req.formData();



const file =
formData.get("file") as File;



if(!file){

return NextResponse.json(
{
message:"No file uploaded"
},
{
status:400
}
);

}




if(!file.type.startsWith("image/")){

return NextResponse.json(
{
message:"Only images allowed"
},
{
status:400
}
);

}




if(file.size > 2 * 1024 * 1024){

return NextResponse.json(
{
message:"Image must be less than 2MB"
},
{
status:400
}
);

}



const bytes =
await file.arrayBuffer();


const buffer =
Buffer.from(bytes);



const fileName =
`${uuid()}-${file.name}`;



const { error:uploadError } =
await supabase.storage
.from("avatars")
.upload(
fileName,
buffer,
{
contentType:file.type
}
);



if(uploadError){

throw uploadError;

}




const { data } =
supabase.storage
.from("avatars")
.getPublicUrl(fileName);



const avatarUrl =
data.publicUrl;



const user =
await updateUser(
decoded.email,
{
avatar:avatarUrl
}
);



return NextResponse.json(
{
message:"Avatar uploaded",
user
}
);



}catch(error){

console.error(
"Avatar upload error:",
error
);


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