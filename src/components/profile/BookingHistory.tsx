"use client";


type Booking = {
  id: string;
  room: string;
  date: string;
  status: string;
};


type Props = {
  bookings?: Booking[];
};


export default function BookingHistory({
  bookings = [],
}: Props) {


  return (

    <div className="rounded-3xl bg-[#0F172A] p-8 shadow-2xl">


      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Booking History
        </h2>

        <p className="mt-2 text-slate-400">
          View your previous and upcoming stays.
        </p>

      </div>



      {
        bookings.length === 0 ? (

          <div className="rounded-2xl border border-slate-700 p-6 text-center">

            <p className="text-slate-400">
              No bookings yet.
            </p>


            <button
              className="mt-4 rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-[#0F172A] hover:bg-yellow-400"
            >
              Explore Rooms
            </button>


          </div>


        ) : (


          <div className="space-y-4">


            {
              bookings.map((booking) => (

                <div
                  key={booking.id}
                  className="rounded-2xl bg-white/10 p-5"
                >

                  <h3 className="font-bold text-white">
                    {booking.room}
                  </h3>


                  <p className="mt-2 text-slate-300">
                    {booking.date}
                  </p>


                  <span className="mt-3 inline-block rounded-full bg-[#D4AF37] px-4 py-1 text-sm font-semibold text-[#0F172A]">
                    {booking.status}
                  </span>


                </div>

              ))
            }


          </div>


        )
      }



    </div>

  );

}