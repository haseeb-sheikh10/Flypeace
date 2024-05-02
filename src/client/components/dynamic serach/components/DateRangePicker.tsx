import { FC } from "react";

interface DateRangePickerProps {}

const DateRangePicker: FC<DateRangePickerProps> = () => {
  return (
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
  );
};

export default DateRangePicker;
