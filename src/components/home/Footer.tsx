import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Rooms",
    href: "/rooms",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];


export default function Footer() {
  return (
    <footer className="bg-[#020617] py-12 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">


        <div>
          <h2 className="text-2xl font-bold text-[#D4AF37]">
            Rob's Finder
          </h2>

          <p className="mt-4 text-gray-400">
            Discover comfortable stays, premium rooms and unforgettable
            hospitality.
          </p>
        </div>



        <div>
          <h3 className="font-semibold">
            Quick Links
          </h3>

          <div className="mt-4 space-y-3">

            {links.map((link)=>(
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-400 transition hover:text-[#D4AF37]"
              >
                {link.name}
              </Link>
            ))}

          </div>
        </div>




        <div>

          <h3 className="font-semibold">
            Contact
          </h3>

          <p className="mt-4 text-gray-400">
            Email: info@robsfinder.com
          </p>

          <p className="mt-2 text-gray-400">
            Phone: +237 XXX XXX XXX
          </p>

          <p className="mt-2 text-gray-400">
            Cameroon
          </p>

        </div>


      </div>



      <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">

        © {new Date().getFullYear()} Rob's Finder. All rights reserved.

      </div>


    </footer>
  );
}