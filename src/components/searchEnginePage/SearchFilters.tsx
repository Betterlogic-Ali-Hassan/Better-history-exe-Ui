import { filters } from "@/constant/SearchFilters";
import Button from "../ui/Button";
import { useRef, useState } from "react";
import { useSearch } from "@/context/SearchFilterContext";
import { useHistory } from "@/context/HistoryContext";

const SearchFilters = () => {
  const { setSearchActive } = useSearch();
  const { setSearchTerm } = useHistory();

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleFilters = (value: string) => {
    setSearchActive(true);
    setSearchTerm(value);
  };
  return (
    <div
      className='overflow-x-auto flex  no-scrollbar custom-scroll  my-2'
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeaveOrUp}
      onMouseUp={handleMouseLeaveOrUp}
      onMouseMove={handleMouseMove}
    >
      {filters.map((filter, index) => (
        <Button
          onClick={() => handleFilters(filter.value)}
          className='h-8 px-4 py-0.5 mr-2 rounded-[20px] text-text-primary hover:bg-hover  ring-0 relative group'
          key={index}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default SearchFilters;
