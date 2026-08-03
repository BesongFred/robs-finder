"use client";


type Room = {
  id: string;
  name: string;
  image: string;
  price: string;
};


type Props = {
  favorites?: Room[];
};



export default function FavoriteRooms({
  favorites = [],
}: Props) {


  return (

    <div className="rounded-3xl bg-[#0F172A] p-8 shadow-2xl">


      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Favorite Rooms
        </h2>


        <p className="mt-2 text-slate-400">
          Rooms you saved for your next stay.
        </p>


      </div>



      {
        favorites.length === 0 ? (

          <div className="rounded-2xl border border-slate-700 p-6 text-center">


            <p className="text-slate-400">
              No favorite rooms yet.
            </p>


            <button
              className="mt-4 rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-[#0F172A]"
            >
              Browse Rooms
            </button>


          </div>


        ) : (


          <div className="grid gap-6 md:grid-cols-2">


            {
              favorites.map((room)=>(

                <div
                  key={room.id}
                  className="overflow-hidden rounded-2xl bg-white/10"
                >

                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-48 w-full object-cover"
                  />


                  <div className="p-5">


                    <h3 className="text-xl font-bold text-white">
                      {room.name}
                    </h3>


                    <p className="mt-2 text-[#D4AF37]">
                      {room.price}
                    </p>


                  </div>


                </div>

              ))
            }


          </div>


        )
      }



    </div>

  );

}