import { FC, useState } from "react";
import logo from "../../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { Mail, PhoneCall } from "lucide-react";

interface NavabrClientProps {}

const NavabrClient: FC<NavabrClientProps> = () => {
  const [active, setActive] = useState(1);
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Flights",
      path: "flights",
    },
    {
      id: 3,
      name: "Hotels",
      path: "hotels",
    },
    {
      id: 4,
      name: "Contact",
      path: "contact-us",
    },
    {
      id: 5,
      name: "About",
      path: "about-us",
    },
  ];

  return (
    <header className="z-50 sticky top-0 backdrop-blur-xl bg-glass border-b border-b-gray-200 py-3">
      <div className="container mx-auto grid grid-cols-12">
        <img src={logo} alt="logo" className="w-52 col-span-2" />
        <nav className="col-start-4 col-end-10 place-content-center">
          <ul className="flex items-center gap-5 flex-1 text-md tracking-wide">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                to={item?.path}
                className={`py-2 px-6 rounded-full hover:bg-gray-100 ${
                  active === item?.id && "bg-gray-100 font-semibold"
                }`}
                onClick={() => setActive(item.id)}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="col-start-11 col-span-2 place-content-center">
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2">
              <Mail className="text-primary" />
              <a
                href="mailto:info@flypeace.co.uk"
                className="text-sm hover:font-semibold"
              >
                info@flypeace.co.uk
              </a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="text-primary" />
              <a
                href="tel:+44 20 8965 0364"
                className="text-sm  hover:font-semibold"
              >
                020 8965 0364
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavabrClient;
