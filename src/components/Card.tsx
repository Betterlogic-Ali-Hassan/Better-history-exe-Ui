import { cn } from "@/lib/utils";
import { Card } from "@/types/CardTypes";
import { useHistoryItem } from "../hooks/use-history-item";
import DeleteEntry from "./DeleteEntry";
import { Checkbox } from "./ui/checkbox";
import Button from "./ui/Button";
import { useBlackList } from "@/context/BlackListContext";
import { toast } from "react-toastify";
// import { useSearch } from "@/context/SearchFilterContext";
// import { useHistory } from "@/context/HistoryContext";
import { usePageContext } from "@/context/PageContext";

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
    time,
  } = useHistoryItem(data);
  const { handleAddDomain } = useBlackList();
  // const { setSearchActive } = useSearch();
  // const { setSearchTerm } = useHistory();
  const { setPage } = usePageContext();
  const handleAddBlackListDomain = () => {
    const parsedUrl = new URL(path);
    const domain = parsedUrl.hostname.replace(/^www\./, "");
    handleAddDomain(domain);
    toast.success("Domain added to blacklist");
  };
  const handleMoreSiteInfo = () => {
    // setSearchActive(true);
    setPage("search");
    // setSearchTerm(value);
  };
  return (
    <div
      className={cn(
        "  border-transparent hover:bg-hover overflow-x-auto no-scrollbar select-none bg-card  w-full relative border block rounded-md group",
        selected && " bg-hover",
        showSelectionCard && "cursor-pointer"
      )}
      onClick={handleToggle}
    >
      <div className='flex items-center w-full'>
        <div className='flex items-center w-full'>
          <Checkbox className='h-5 w-5 ml-4' />
          <a
            target='_blank'
            className={cn(
              "focus:outline-none focus-visible:ring-1 w-full  justify-between  rounded truncate grow flex items-center gap-3 px-5 lg:px-4 h-14 lg:h-12",
              showSelectionCard && "pointer-events-none"
            )}
            href={path}
          >
            <div className='flex items-start gap-2'>
              <object
                type='image/png'
                className='w-5 h-5 flex-none rounded-sm overflow-hidden mt-1'
                data={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${path}&size=32`}
              />
              <div>
                <div className='truncate text-sm font-medium text-text  pr-8 max-w-[135px] sm:max-w-[150px] '>
                  {title}
                </div>
                <div className='pr-6 text-[11px] opacity-50  max-w-[220px]   min-w-[220px] tracking-wide max-sm:hidden'>
                  <span className='truncate max-w-[170px] block text-text'>
                    {path}
                  </span>
                </div>
              </div>
            </div>
            <div className=' text-[11px] absolute top-1 right-3 opacity-80  tracking-wide '>
              {date}
            </div>
            <div className=' text-[10px] border border-badge  py-0.5 rounded-full px-2  mt-5  '>
              {time}
            </div>
          </a>
          <div
            className={cn(
              " cursor-pointer  opacity-0 transition h-full duration-200 bg-hover flex items-center gap-2 absolute right-2    text-foreground group-hover:!opacity-100 ",
              showSelectionCard && "!opacity-0 pointer-events-none",
              page === "device" && "hidden"
            )}
          >
            <Button
              className='text-[11px] bg-badge'
              onClick={handleAddBlackListDomain}
            >
              Add to Blacklist
            </Button>
            <Button
              className='text-[11px] bg-badge'
              onClick={handleMoreSiteInfo}
            >
              More from site
            </Button>

            <DeleteEntry
              id={id}
              className={cn(
                " cursor-pointer opacity-60 mr-2 transition duration-200    text-foreground hover:!opacity-100 "
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
