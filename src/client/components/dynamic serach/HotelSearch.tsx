import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, UserPlus } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";

interface HotelSearchProps {}

const HotelSearch: FC<HotelSearchProps> = () => {
  const [showDropdown, setShowDropdown] = useState({
    locations: false,
    dates: false,
    guests: false,
  });
  const [locations, setLocations] = useState<string[]>([]);

  const locationRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target as Node)
      ) {
        setShowDropdown({ ...showDropdown, locations: false });
      }

      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setShowDropdown({ ...showDropdown, dates: false });
      }

      if (
        guestsRef.current &&
        !guestsRef.current.contains(event.target as Node)
      ) {
        setShowDropdown({ ...showDropdown, guests: false });
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Function to handle input focus and show the dropdown
  const handleLocationFocus = () => {
    setShowDropdown({ ...showDropdown, locations: true });
    setLocations(["Lagos", "Abuja", "Kano", "Enugu", "Port Harcourt"]);
  };
  const handleDateFocus = () => {
    setShowDropdown({ ...showDropdown, dates: true });
  };
  const handleGuestFocus = () => {
    setShowDropdown({ ...showDropdown, guests: true });
  };

  // Function to handle selection of a location from the dropdown
  const handleLocationSelect = (location: string) => {
    // Do something with the selected location (e.g., update input value)
    console.log("Selected location:", location);
    // Hide the dropdown after selecting a location
    setShowDropdown({ ...showDropdown, locations: false });
  };

  return (
    <div className="flex gap-10 py-5">
      <div className="flex items-center w-[30%] gap-3 relative">
        <MapPin className="text-gray-400 w-8 h-8" />
        <div className="">
          <input
            ref={locationRef}
            type="text"
            placeholder="Location"
            className="w-full bg-transparent placeholder:text-black font-semibold focus:border-0 focus:outline-0 focus:placeholder:text-gray-400"
            onFocus={handleLocationFocus}
          />
          <p className="text-gray-400 text-sm mt-1">Where are you going?</p>
          {showDropdown.locations && (
            <div className="absolute top-full z-20 left-0 w-full h-[200px] bg-white shadow-md rounded-lg mt-3">
              <ul>
                {locations.map((location, index) => (
                  <li
                    key={index}
                    className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                    onClick={() => handleLocationSelect(location)}
                  >
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Separator orientation="vertical" className="h-[35%] my-auto" />

      <div className="flex items-center w-[30%] gap-3 relative">
        <CalendarDays className="text-gray-400 w-8 h-8" />
        <div className="">
          <input
            ref={dateRef}
            type="text"
            placeholder="Location"
            className="w-full bg-transparent placeholder:text-black font-semibold focus:border-0 focus:outline-0 focus:placeholder:text-gray-400"
            onFocus={handleDateFocus}
          />
          <p className="text-gray-400 text-sm mt-1">Check in - Check out</p>
          {showDropdown.dates && (
            <div className="absolute top-full z-20 left-0 w-full h-[200px] bg-white shadow-md rounded-lg mt-3">
              <ul>
                {locations.map((location, index) => (
                  <li
                    key={index}
                    className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                    onClick={() => handleLocationSelect(location)}
                  >
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Separator orientation="vertical" className="h-[35%] my-auto" />

      <div className="flex items-center w-[30%] gap-3 relative">
        <UserPlus className="text-gray-400 w-8 h-8" />
        <div className="">
          <div
            ref={guestsRef}
            className="w-full bg-transparent  text-black font-bold"
            onClick={handleGuestFocus}
          >
            Guests
          </div>
          <p className="text-gray-400 text-sm mt-1">Add guests</p>
          {showDropdown.guests && (
            <div className="absolute top-full z-20 left-0 w-full h-[200px] bg-white shadow-md rounded-lg mt-3">
              <ul>
                {locations.map((location, index) => (
                  <li
                    key={index}
                    className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                    onClick={() => handleLocationSelect(location)}
                  >
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center w-[10%]"></div>
    </div>
  );
};

export default HotelSearch;
