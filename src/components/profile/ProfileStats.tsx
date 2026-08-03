"use client";

type Props = {
  user?: any;
};


export default function ProfileStats({ user }: Props) {


  const stats = [
    {
      title: "Total Bookings",
      value: 0,
      color: "text-white",
    },

    {
      title: "Upcoming",
      value: 0,
      color: "text-[#D4AF37]",
    },

    {
      title: "Completed",
      value: 0,
      color: "text-green-400",
    },

    {
      title: "Favorites",
      value: 0,
      color: "text-blue-400",
    },
  ];



  return (

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


      {
        stats.map((item) => (

          <div
            key={item.title}
            className="rounded-3xl bg-[#0F172A] p-8 shadow-2xl"
          >

            <h3 className="text-sm uppercase tracking-wide text-slate-400">
              {item.title}
            </h3>


            <p
              className={`mt-4 text-4xl font-bold ${item.color}`}
            >
              {item.value}
            </p>


          </div>

        ))
      }


    </div>

  );

}