"use client";

import { useEffect, useRef } from "react";

import CardRenderer from "./CardRenderer";

import { Card } from "@/types/CardTypes";
import { useHeaderContext } from "@/context/HeaderContext";
import { useDateContext } from "@/context/DateContext";
import HourlyLog from "./activityPage/HourlyLog";
import { cn } from "@/lib/utils";
import Results from "./devicePage/Results";

interface CardGroupProps {
  cards: Card[];
  isDownloadPage: boolean;
  isShowHourlyLog: boolean;
  showHourlyLogAfter?: boolean;
  specificTime?: string;
  date?: string;
  isFirstInDateGroup?: boolean;
  isDevicePage?: boolean;
}

export default function CardGroup({
  cards,
  isShowHourlyLog,
  isDownloadPage,
  specificTime,
  isDevicePage,
  date,
  isFirstInDateGroup = false,
}: CardGroupProps) {
  const containerClasses = "flex flex-col gap-2 px-1.5 lg:px-0 mt-2 lg:mt-0 ";

  const groupRef = useRef<HTMLDivElement>(null);
  const { setCurrentHeader } = useHeaderContext();

  const { setSelectedDate, registerDateRef, noResultsMessage } =
    useDateContext();
  const time = specificTime || cards[0]?.time || "";
  const groupDate = date || cards[0]?.date || "";
  const id = cards[0]?.id || "";

  useEffect(() => {
    if (
      isFirstInDateGroup &&
      groupRef.current &&
      groupDate &&
      groupDate !== "default"
    ) {
      try {
        const dateObj = new Date(groupDate);

        if (!isNaN(dateObj.getTime())) {
          const dateString = dateObj.toISOString().split("T")[0];
          registerDateRef(dateString, groupRef.current);
        }
      } catch (e) {
        console.error("Invalid date format:", groupDate, e);
      }
    }
  }, [isFirstInDateGroup, groupDate, registerDateRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setCurrentHeader({ date: groupDate, time });
            if (groupDate && groupDate !== "default") {
              try {
                const dateObj = new Date(groupDate);
                if (!isNaN(dateObj.getTime())) {
                  setSelectedDate(dateObj);
                }
              } catch (e) {
                console.error("Invalid date format:", groupDate, e);
              }
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (groupRef.current) {
      observer.observe(groupRef.current);
    }

    return () => {
      if (groupRef.current) {
        observer.unobserve(groupRef.current);
      }
    };
  }, [
    cards,
    groupDate,
    time,
    isShowHourlyLog,
    setCurrentHeader,
    setSelectedDate,
  ]);

  return (
    <div>
      <div className={cn(isShowHourlyLog && noResultsMessage && "opacity-0")}>
        {isShowHourlyLog && (
          <HourlyLog
            specificTime={time}
            date={isFirstInDateGroup ? groupDate : undefined}
            id={id}
          />
        )}
        {isDevicePage && <Results />}
        <div className={containerClasses} ref={groupRef}>
          {cards.map((card) => (
            <CardRenderer
              key={card.id}
              isDownloadPage={isDownloadPage}
              data={card}
            />
          ))}
        </div>
      </div>
      <p
        className={cn(
          "text-lg text-text font-medium text-center absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-12",
          isShowHourlyLog && noResultsMessage && "block"
        )}
      >
        {noResultsMessage}
      </p>
    </div>
  );
}
