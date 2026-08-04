"use client";


type Props = {
  avatar?: string;
  name: string;
};



export default function ProfileAvatar({
  avatar,
  name,
}: Props) {


if(!avatar){

return (

<div className="
flex h-28 w-28
items-center justify-center
rounded-full
border-4 border-yellow-500
bg-[#1E3A8A]
text-4xl
font-bold
text-white
">

{name.charAt(0).toUpperCase()}

</div>

);

}



return (

<img
src={avatar}
alt={`${name} profile picture`}
className="
h-28 w-28
rounded-full
border-4
border-yellow-500
object-cover
"
/>

);

}