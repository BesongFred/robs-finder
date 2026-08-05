type User = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  createdAt?: string;
};



export default function ProfileCard({
  user
}: {
  user: User;
}) {


  return (

    <div className="
      bg-white
      rounded-3xl
      shadow-lg
      border
      border-gray-100
      p-8
    ">


      <h2 className="
        text-2xl
        font-bold
        text-[#0F172A]
        mb-6
      ">
        Personal Information
      </h2>



      <div className="
        space-y-5
      ">


        <Info
          label="Full Name"
          value={`${user.firstName} ${user.lastName}`}
        />


        <Info
          label="Email Address"
          value={user.email}
        />


        <Info
          label="Phone Number"
          value={user.phone || "Not added"}
        />


        <Info
          label="Member Since"
          value={
            user.createdAt
            ? new Date(user.createdAt)
              .toLocaleDateString()
            : "Recently"
          }
        />


        <Info
          label="Account ID"
          value={user.id || "N/A"}
        />


      </div>


    </div>

  );

}




function Info({
  label,
  value
}: {
  label:string;
  value:string;
}) {


  return (

    <div className="
      bg-[#F8FAFC]
      rounded-xl
      p-4
    ">

      <p className="
        text-sm
        text-gray-500
      ">
        {label}
      </p>


      <p className="
        mt-1
        font-semibold
        text-[#0F172A]
        break-all
      ">
        {value}
      </p>


    </div>

  );

}