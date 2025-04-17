"use client";

import { useHistory } from "@/context/HistoryContext";
import { usePageContext } from "@/context/PageContext";
import { Card } from "@/types/CardTypes";

export function useHistoryItem(data: Card) {
  const { id, path, tags, icon, title, des, date } = data;
  const { page } = usePageContext();
  const { toggleCard, showSelectionCard, selectedCards, toggleCategory } =
    useHistory();

  const today = new Date().toDateString();

  const handleToggle = () => {
    if (showSelectionCard) toggleCard(id);
  };

  const selected = selectedCards.includes(data.id);

  return {
    id,
    path,
    tags,
    icon,
    title,
    des,
    today,
    handleToggle,
    selected,
    selectedCards,
    showSelectionCard,
    toggleCategory,
    date,
    page,
  };
}
