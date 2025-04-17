import { useEffect, useRef, useState } from "react";
import DropDownContent from "./DropDownContent";
import { usePageContext } from "@/context/PageContext";
import { cn } from "@/lib/utils";
import { useHistory } from "@/context/HistoryContext";
import DotsIcon from "@/svgs/DotsIcon";

const DropDown = () => {
  const { cards } = useHistory();
  const { page } = usePageContext();
  const [openDropDown, setOpenDropDown] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const count = cards.length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const pageTitles: Record<string, string> = {
    activity: "Activities",
    downloads: "Downloads",
    search: "",
    device: "Devices",
  };
  const isShowSelectionMenu = page === "extensions";

  const handleOpenDropDown = () => {
    if (!isShowSelectionMenu) setOpenDropDown(!openDropDown);
  };

  return (
    <div className='hidden lg:flex lg:h-[3.25rem] items-center justify-end'>
      <div
        className={cn(
          "flex items-center px-4 whitespace-nowrap text-foreground text-sm cursor-pointer",
          isShowSelectionMenu && "cursor-default"
        )}
        ref={containerRef}
      >
        <span onClick={handleOpenDropDown}>
          {page !== "search" && (
            <>
              {count} {pageTitles[page]}
            </>
          )}
        </span>
        {!isShowSelectionMenu && (
          <div className='relative flex justify-center items-center'>
            <button
              className='p-2 lg:p-0.5 lg:text-foreground hover:text-text'
              onClick={handleOpenDropDown}
            >
              <DotsIcon />
            </button>
            {openDropDown && (
              <DropDownContent setOpenDropDown={setOpenDropDown} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
