import { filters } from "@/constant/SearchFilters";
import Button from "../ui/Button";
import { useRef, useState } from "react";

const SearchFilters = () => {
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
          className='h-8 px-4 py-0.5 mr-2 rounded-[20px] bg-brand text-text-primary hover:bg-brand-hover ring-0 relative group'
          key={index}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default SearchFilters;
