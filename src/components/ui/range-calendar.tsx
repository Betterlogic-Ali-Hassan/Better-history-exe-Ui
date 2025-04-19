"use client";

import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

interface Props {
  date: DateRange | undefined;
  setDate: (range: DateRange | undefined) => void;
}
export default function RangeCalendar({ date, setDate }: Props) {
  return (
    <div className='flex flex-col gap-4'>
      <Calendar
        mode='range'
        selected={date}
        onSelect={setDate}
        className='rounded-md border-0 p-2'
      />
    </div>
  );
}
