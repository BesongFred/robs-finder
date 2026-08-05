"use client";


type Props = {
  bookings?: number;
  upcoming?: number;
  favorites?: number;
  rewards?: number;
};



export default function ProfileStats({

  bookings = 0,

  upcoming = 0,

  favorites = 0,

  rewards = 0,

}: Props) {



const stats = [

  {
    title:"Total Bookings",
    value: bookings,
    icon:"🏨",
  },

  {
    title:"Upcoming Stays",
    value: upcoming,
    icon:"📅",
  },

  {
    title:"Favorite Rooms",
    value: favorites,
    icon:"⭐",
  },

  {
    title:"Reward Points",
    value: rewards,
    icon:"🏆",
  },

];



return (

<div className="
grid
grid-cols-2
lg:grid-cols-4
gap-4
md:gap-6
">


{
stats.map((item)=>(

<div

key={item.title}

className="
bg-white
rounded-3xl
p-5
md:p-6
shadow-lg
border
border-gray-100
hover:shadow-xl
transition
"

>


<div className="
text-3xl
">
{item.icon}
</div>



<p className="
mt-4
text-sm
text-gray-500
">

{item.title}

</p>



<h3 className="
mt-2
text-3xl
font-bold
text-[#0F172A]
">

{item.value}

</h3>


</div>


))

}


</div>

);

}