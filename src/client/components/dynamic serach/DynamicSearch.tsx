import { FC, useState } from "react";
import HotelSearch from "./HotelSearch";
import FlightsSearch from "./FlightsSearch";

interface DynamicSearchProps {}

const DynamicSearch: FC<DynamicSearchProps> = () => {
  const [selector, setSelector] = useState(1);

  const selectOptions = [
    {
      id: 1,
      label: "Stays",
    },
    {
      id: 2,
      label: "Flights",
    },
  ];

  return (
    <div className="w-[100%] min-h-[120px] absolute top-[80%] left-[50%] translate-x-[-50%] flex flex-col gap-5">
      <div className="flex gap-10 px-7">
        {selectOptions.map((item, key) => (
          <div key={key} className="flex items-center gap-2">
            {item?.id === selector && (
              <div className="w-2 h-2 bg-heading rounded-full"></div>
            )}
            <h1
              className={`${
                item?.id === selector ? "text-heading" : "text-body"
              } cursor-pointer`}
              onClick={() => setSelector(item?.id)}
            >
              {item.label}
            </h1>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg px-8 shadow-xl flex-1">
        {selector === 1 ? <HotelSearch /> : <FlightsSearch />}
      </div>
    </div>
  );
};

export default DynamicSearch;
