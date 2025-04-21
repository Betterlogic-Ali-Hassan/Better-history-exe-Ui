import { cn } from "@/lib/utils";
import { Card } from "@/types/CardTypes";
import { useHistoryItem } from "../hooks/use-history-item";
import DeleteEntry from "./DeleteEntry";
import { Checkbox } from "./ui/checkbox";

interface Props {
  data: Card;
}
const TabCard = ({ data }: Props) => {
  const {
    title,
    id,
    handleToggle,
    date,
    selected,
    path,
    page,
    showSelectionCard,
  } = useHistoryItem(data);

  return (
    <div
      className={cn(
        "  border-transparent hover:bg-hover overflow-x-auto no-scrollbar select-none bg-card  w-full relative border block rounded-md group",
        selected &&
          "hover:bg-selected-hover border-selected-border bg-selected-bg",
        showSelectionCard && "cursor-pointer"
      )}
      onClick={handleToggle}
    >
      <div className='flex items-center'>
        <div className='flex items-center w-full'>
          <Checkbox className='h-5 w-5 ml-4' />
          <a
            target='_blank'
            className={cn(
              "focus:outline-none focus-visible:ring-1 ring-inset ring-brand  rounded truncate grow flex items-center gap-3 px-5 lg:px-4 h-14 lg:h-12",
              showSelectionCard && "pointer-events-none",
              page === "activity" &&
                "max-w-[280px] sm:min-w-[280px] min-w-[200px]"
            )}
            href={path}
          >
            <object
              type='image/png'
              className='w-[16px] h-[16px] flex-none rounded-sm overflow-hidden'
              data={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${path}&size=32`}
            />
            <div className='truncate text-sm font-medium text-text  pr-8 max-w-[135px] sm:max-w-[150px] '>
              {title}
            </div>
          </a>

          <div className='pr-6 text-xs opacity-50  max-w-[220px]   min-w-[220px] tracking-wide max-sm:hidden'>
            <span className='truncate max-w-[170px] block text-text'>
              {path}
            </span>
          </div>

          {page === "activity" ? (
            <div className='pr-6 text-xs opacity-50 truncate sm:max-w-[140px] sm:min-w-[120px] lg:min-w-[140px] tracking-wide'>
              {date}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <DeleteEntry
          id={id}
          className={cn(
            "mx-2  cursor-pointer group-hover:opacity-60 transition duration-200    text-foreground hover:!opacity-100 ",
            showSelectionCard && "!opacity-0 pointer-events-none",
            page === "devices" && "!hidden"
          )}
        />
      </div>
    </div>
  );
};

export default TabCard;
