import { Card } from "@/types/CardTypes";

export const filterCards = (
  cards: Card[],
  searchTerm: string,
  selectedCategories: string[]
): Card[] => {
  if (!searchTerm.trim() && selectedCategories.length === 0) {
    return cards;
  }

  const searchTermLower = searchTerm.toLowerCase();

  return cards.filter((card) => {
    // Handle category filtering
    const categoryMatch =
      selectedCategories.length === 0 ||
      (card.tags &&
        card.tags.some((tag) => selectedCategories.includes(tag.id)));

    // Handle different search patterns
    let searchMatch = true;
    if (searchTerm.trim()) {
      // Check for starts-with search (^)
      if (searchTerm.startsWith("^")) {
        const term = searchTerm.slice(1).toLowerCase();
        searchMatch =
          card.title.toLowerCase().startsWith(term) ||
          card.path.toLowerCase().startsWith(term);
      }
      // Check for OR search (|)
      else if (searchTerm.includes("|")) {
        const terms = searchTerm.split("|").map((t) => t.trim().toLowerCase());
        searchMatch = terms.some(
          (term) =>
            card.title.toLowerCase().includes(term) ||
            (card.path && card.path.toLowerCase().includes(term))
        );
      }
      // Check for number-only search (\d+)
      else if (searchTerm === "\\d+") {
        searchMatch = /^\d+$/.test(card.title) || /^\d+$/.test(card.path);
      } else if (searchTerm === "?") {
        searchMatch =
          card.title.toLowerCase().endsWith("?") ||
          card.path.toLowerCase().endsWith("?");
      }
      // Default case-insensitive contains search
      else {
        searchMatch =
          card.title.toLowerCase().includes(searchTermLower) ||
          card.path.toLowerCase().includes(searchTermLower);
      }
    }

    return categoryMatch && searchMatch;
  });
};
