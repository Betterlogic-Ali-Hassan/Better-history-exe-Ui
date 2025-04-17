"use client";

import { createDateItem, isSameDayAsDate } from "@/lib/date-utils";
import { useState, useEffect, useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import DateSliderItem from "./DateSliderItem";
import { useDateContext } from "@/context/DateContext";
import Button from "@/components/ui/Button";

const DateSlider = () => {
  const { selectedDate, setSelectedDate } = useDateContext();

  const allDates = generateDateSequence(365);
  const dateItems = allDates.map((date) => createDateItem(date));

  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const shouldAutoCenter = useRef(true);

  useEffect(() => {
    if (!selectedDate || !shouldAutoCenter.current) return;

    const selectedIndex = dateItems.findIndex((item) =>
      isSameDayAsDate(item.date, selectedDate)
    );

    const isAlreadyVisible =
      selectedIndex >= visibleStartIndex &&
      selectedIndex < visibleStartIndex + 7;

    if (selectedIndex !== -1 && !isAlreadyVisible) {
      const newStartIndex = Math.max(0, selectedIndex - 3);
      const maxStartIndex = dateItems.length - 7;
      setVisibleStartIndex(Math.min(newStartIndex, maxStartIndex));
    }
  }, [selectedDate, dateItems, visibleStartIndex]);

  const visibleDates = dateItems.slice(
    visibleStartIndex,
    visibleStartIndex + 7
  );

  const canScrollLeft = visibleStartIndex > 0;
  const canScrollRight = visibleStartIndex < dateItems.length - 7;

  const handleDateSelect = (date: Date) => {
    shouldAutoCenter.current = true;
    setSelectedDate(date);
  };

  const scrollLeft = () => {
    shouldAutoCenter.current = false;
    if (canScrollLeft) {
      setVisibleStartIndex((prev) => prev - 1);
    }
  };

  const scrollRight = () => {
    shouldAutoCenter.current = false;
    if (canScrollRight) {
      setVisibleStartIndex((prev) => prev + 1);
    }
  };

  return (
    <div className='flex items-center gap-6 justify-center w-full mt-3'>
      <Button
        className='h-[42px] max-w-[25px] w-full flex items-center  max-lg:hidden justify-center rounded border-border   bg-card hover:bg-hover  transition duration-200'
        onClick={scrollLeft}
        disabled={!canScrollLeft}
      >
        <span>
          <ChevronLeft size={12} />
        </span>
      </Button>
      <div className='flex items-center gap-3 lg:gap-[14px] overflow-x-auto no-scrollbar'>
        {visibleDates.map((dateItem) => (
          <DateSliderItem
            key={dateItem.date.toDateString()}
            dateItem={dateItem}
            isSelected={
              selectedDate
                ? isSameDayAsDate(dateItem.date, selectedDate)
                : false
            }
            onSelect={handleDateSelect}
          />
        ))}
      </div>
      <Button
        className='h-[42px] max-w-[25px] w-full flex items-center  max-lg:hidden justify-center rounded border-border   bg-card hover:bg-hover  transition duration-200'
        onClick={scrollRight}
        disabled={!canScrollLeft}
      >
        <span>
          <ChevronRight size={12} />
        </span>
      </Button>
    </div>
  );
};

function generateDateSequence(daysInPast: number) {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i <= daysInPast; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dates.push(date);
  }

  return dates;
}

export default DateSlider;
