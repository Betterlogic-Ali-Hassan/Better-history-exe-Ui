"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import type { Card } from "@/types/CardTypes";

import { usePageContext } from "@/context/PageContext";

import { useHeaderContext } from "@/context/HeaderContext";
import CardGroup from "./CardGroup";
import InfiniteScrollSentinel from "./InfiniteScrollSentinel";

interface TabsCardsProps {
  cards: Card[];
}

interface DateGroup {
  date: string;
  timeGroups: {
    time: string;
    cards: Card[];
  }[];
}

const TabsCards = ({ cards }: TabsCardsProps) => {
  const { page } = usePageContext();
  const { setCurrentHeader } = useHeaderContext();

  const isShowHourlyLog = page === "activity";
  const isDownloadPage = page === "downloads";
  const isDevicePage = page === "device";
  const INITIAL_CARDS_COUNT = 100;
  const CARDS_PER_LOAD = 40;
  const [visibleCardsCount, setVisibleCardsCount] =
    useState(INITIAL_CARDS_COUNT);

  const loadMoreCards = useCallback(() => {
    setVisibleCardsCount((prevCount) =>
      Math.min(prevCount + CARDS_PER_LOAD, cards.length)
    );
  }, [cards.length]);

  const filteredCards = useMemo(() => {
    return cards;
  }, [cards]);

  const visibleCards = useMemo(() => {
    return filteredCards.slice(0, visibleCardsCount);
  }, [filteredCards, visibleCardsCount]);

  const cardGroups = useMemo(() => {
    // First group by date
    const dateGroups: Record<string, Record<string, Card[]>> = {};

    visibleCards.forEach((card) => {
      const date = card.date || "default";
      const time = card.time || "default";

      if (!dateGroups[date]) {
        dateGroups[date] = {};
      }

      if (!dateGroups[date][time]) {
        dateGroups[date][time] = [];
      }

      dateGroups[date][time].push(card);
    });

    const result: DateGroup[] = [];

    for (const [date, timeGroups] of Object.entries(dateGroups)) {
      const sortedTimeGroups = Object.entries(timeGroups)
        .map(([time, cards]) => ({ time, cards }))
        .sort((a, b) => b.time.localeCompare(a.time));

      result.push({
        date,
        timeGroups: sortedTimeGroups,
      });
    }

    // Sort dates in descending order
    result.sort((a, b) => {
      if (a.date === "default") return 1;
      if (b.date === "default") return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return { type: "grouped" as const, groups: result };
  }, [visibleCards, isShowHourlyLog]);

  useEffect(() => {
    if (cards.length > 0 && cards[0].date && cards[0].time) {
      setCurrentHeader({
        date: cards[0].date,
        time: cards[0].time,
      });
    }
  }, [cards, setCurrentHeader]);

  const hasMoreCards = visibleCardsCount < filteredCards.length;

  return (
    <div>
      <>
        {cardGroups.groups.map((dateGroup, dateIndex) => (
          <div key={`date-group-${dateIndex}`}>
            {dateGroup.date !== "default" && dateIndex !== 0 && (
              <h4 className=' py-6 pb-2 text-xl font-bold'>{dateGroup.date}</h4>
            )}
            {dateGroup.timeGroups.map((timeGroup, timeIndex) => (
              <CardGroup
                key={`time-group-${dateIndex}-${timeIndex}`}
                isDevicePage={isDevicePage}
                cards={timeGroup.cards}
                isDownloadPage={isDownloadPage}
                isShowHourlyLog={isShowHourlyLog}
                showHourlyLogAfter={timeIndex < dateGroup.timeGroups.length - 1}
                specificTime={timeGroup.time}
                date={dateGroup.date}
                isFirstInDateGroup={timeIndex === 0}
              />
            ))}
          </div>
        ))}
      </>

      <InfiniteScrollSentinel
        onLoadMore={loadMoreCards}
        hasMore={hasMoreCards}
      />
    </div>
  );
};

export default TabsCards;
