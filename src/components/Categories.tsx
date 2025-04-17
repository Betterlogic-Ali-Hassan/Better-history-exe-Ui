"use client";

import { getCategoryCounts, getCategoryName } from "@/lib/category-utils";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

import { BsPin, BsPinFill } from "react-icons/bs";
import { useHistory } from "@/context/HistoryContext";

const Categories = ({ className }: { className?: string }) => {
  const {
    toggleCategory,
    selectedCategories,
    filteredCards,
    categories,
    setPinCategories,
    pinCategories,
  } = useHistory();
  const categoryCounts = useMemo(
    () => getCategoryCounts(filteredCards),
    [filteredCards]
  );

  const handlePinCategory = (name: string) => {
    return () => {
      const updatedCategories = pinCategories.includes(name)
        ? pinCategories.filter((category) => category !== name)
        : [...pinCategories, name];

      setPinCategories(updatedCategories);
    };
  };

  return (
    <div
      className={cn(
        "hidden lg:block w-[260px] justify-self-end overflow-x-hidden overflow-y-auto no-scrollbar py-2 max-lg:p-5  ",
        className
      )}
    >
      <div className='flex flex-col gap-1.5 lg:gap-0 lg:items-end lg:pr-2  '>
        <h2 className='w-[60px] text-foreground opacity-60 font-medium mr-4 mb-2'>
          Filters
        </h2>
        {categories.map((category, i) => (
          <div key={i} className='flex items-center group p-2 '>
            <button
              onClick={getCategoryName(category.id, toggleCategory)}
              type='button'
              className={cn(
                "text-foreground hover:text-text group focus:outline-none max-w-[260px] cursor-pointer flex gap-0.5 text-sm items-center",
                selectedCategories.includes(category.id) &&
                  "font-medium text-brand hover:text-brand"
              )}
            >
              <span className='group-focus-visible:ring-1 ring-0 rounded ring-inset ring-border leading-1 whitespace-nowrap truncate grow text-right p-2'>
                {category.name}
              </span>
              <span
                className={cn(
                  "w-8 text-left shrink whitespace-nowrap truncate text-foreground",
                  selectedCategories.includes(category.id) &&
                    "font-medium text-brand hover:text-brand"
                )}
              >
                {categoryCounts[category.id] || 0}
              </span>
            </button>
            <button
              className={cn(
                "mt-1 -ml-1.5 cursor-pointer opacity-0 transition duration-200 group-hover:opacity-100 hover:text-brand",
                pinCategories.includes(category.name) &&
                  "text-brand opacity-100"
              )}
              onClick={handlePinCategory(category.name)}
            >
              {pinCategories.includes(category.name) ? (
                <BsPinFill size={18} />
              ) : (
                <BsPin size={18} />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
