import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { dateFilters } from "@/constant/DateFilters";
import RangeCalendar from "../ui/range-calendar";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import { addDays, differenceInDays } from "date-fns";
import ActionBtn from "../activityPage/ActionBtn";

const CustomExport = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const today = new Date();
  const [date, setDate] = useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 0),
  });
  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
    setSelectedDate(" Custom Range");
  };
  const handleSelectDate = (date: string) => {
    return () => {
      setSelectedDate(date);
      setShowCalendar(false);
    };
  };

  const selectedDays =
    date?.from && date?.to ? differenceInDays(date.to, date.from) + 1 : 0;
  return (
    <Popover>
      <PopoverTrigger>
        <ActionBtn text='Custom Offer' className='text-xs' />
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "bg-background w-[250px] mx-6 rounded-[20px]",
          showCalendar && "w-[500px]"
        )}
      >
        <div className='flex  w-full gap-[18px]'>
          <div className='w-[247px]'>
            {dateFilters.map((filter) => (
              <div
                onClick={handleSelectDate(filter.value)}
                key={filter.value}
                className={cn(
                  "cursor-pointer p-2 rounded-md mb-1 hover:bg-hover text-text text-sm font-semibold",
                  selectedDate === filter.value && "bg-badge"
                )}
              >
                {filter.label}
              </div>
            ))}
            <div
              onClick={handleShowCalendar}
              className={cn(
                "cursor-pointer p-2 mb-1 flex w-full justify-between gap-2 rounded-md hover:bg-hover text-text text-sm font-semibold",
                selectedDate === " Custom Range" && "bg-badge"
              )}
            >
              Custom Range
              <div
                className={cn(
                  "bg-background rounded-full py-1 px-2.5 text-xs hidden text-text",
                  selectedDate === " Custom Range" &&
                    selectedDays > 0 &&
                    "block"
                )}
              >
                {selectedDays > 0 ? ` ${selectedDays} days` : ""}
              </div>
            </div>
            <div className='flex mt-3 gap-2 '>
              <ActionBtn
                text=' Export CSV'
                className='bg-export-bg text-export-text rounded-md text-xs'
              />
              <ActionBtn
                text=' Export HTML'
                className='bg-export-bg text-xs text-export-text rounded-md'
              />
            </div>
          </div>
          {showCalendar && <RangeCalendar date={date} setDate={setDate} />}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CustomExport;
