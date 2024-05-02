import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, UserPlus } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";

interface FlightsSearchProps {}

const FlightsSearch: FC<FlightsSearchProps> = () => {
  const [selectedTrip, setSelectedTrip] = useState([1, 3]);
  const tripOptions = [
    {
      id: 1,
      label: "Round-trip",
    },
    {
      id: 2,
      label: "One-way",
    },
    {
      id: 3,
      label: "Direct Flight",
    },
  ];

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

  const handleTripOptionSelect = (id: number) => {
    if (id === 3) {
      if (selectedTrip.includes(id)) {
        setSelectedTrip(selectedTrip.filter((trip) => trip !== id));
      } else {
        setSelectedTrip([...selectedTrip, id]);
      }
    } else {
      if (id === 1) {
        const arr = selectedTrip.filter((trip) => trip !== 2);
        setSelectedTrip([...arr, id]);
      } else {
        const arr = selectedTrip.filter((trip) => trip !== 1);
        setSelectedTrip([...arr, id]);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-5 py-5 border-b border-b-gray-200">
        {tripOptions.map((option, key) => (
          <Badge
            key={key}
            variant={selectedTrip.includes(option.id) ? "default" : "outline"}
            onClick={() => handleTripOptionSelect(option?.id)}
            className="cursor-pointer"
          >
            {option?.label}
          </Badge>
        ))}
      </div>
      <div className="flex gap-10 py-5">
        <div className="flex items-center w-[30%] gap-3 relative">
          <MapPin className="text-gray-400 w-8 h-8" />
          <div className="">
            <input
              ref={locationRef}
              type="text"
              placeholder="Flying from"
              className="w-full bg-transparent placeholder:text-black font-semibold focus:border-0 focus:outline-0 focus:placeholder:text-gray-400"
              onFocus={handleLocationFocus}
            />
            <p className="text-gray-400 text-sm mt-1">
              Where do you want to fly from?
            </p>
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
          <MapPin className="text-gray-400 w-8 h-8" />
          <div className="">
            <input
              ref={dateRef}
              type="text"
              placeholder="Flying to"
              className="w-full bg-transparent placeholder:text-black font-semibold focus:border-0 focus:outline-0 focus:placeholder:text-gray-400"
              onFocus={handleDateFocus}
            />
            <p className="text-gray-400 text-sm mt-1">
              Where you want to fly to?
            </p>
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
          <CalendarDays className="text-gray-400 w-8 h-8" />
          <div className="">
            <input
              ref={dateRef}
              type="text"
              placeholder="Add Dates"
              className="w-full bg-transparent placeholder:text-black font-semibold focus:border-0 focus:outline-0 focus:placeholder:text-gray-400"
              onFocus={handleDateFocus}
            />
            <p className="text-gray-400 text-sm mt-1">Pick up - Drop off</p>
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

        <div className="flex items-center w-[10%]"></div>
      </div>
    </div>
  );
};

export default FlightsSearch;
