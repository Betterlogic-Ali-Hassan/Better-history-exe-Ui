import { Tooltip } from "react-tooltip";
import { cn } from "@/lib/utils";
import { usePageContext } from "@/context/PageContext";
interface Props {
  icon: React.ReactNode;
  tooltip: string;
  link?: string;
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
  tooltipClassName?: string;
  linkSelected?: boolean;
}
const SidebarItem = ({
  icon,
  tooltip,
  className,
  link,
  side = "right",
  linkSelected,
  tooltipClassName,
}: Props) => {
  const { page, setPage } = usePageContext();
  const selected = page === link || linkSelected;
  const handelClick = (link: string) => {
    return () => {
      setPage(link);
    };
  };
  return (
    <>
      <div
        onClick={handelClick(link ? link : page)}
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-[14px] p-0 transition-colors cursor-pointer",
          "hover:bg-home-sidebar-hover hover:text-default-foreground",
          "focus:bg-default/40 focus:text-default-foreground outline-none",
          selected && "bg-sidebar-selected hover:bg-sidebar-selected",
          className
        )}
        data-tooltip-id='sidebar-tooltip'
        data-tooltip-content={tooltip}
      >
        <div className='flex w-full items-center justify-center text-text'>
          <div>{icon}</div>
        </div>
      </div>

      <Tooltip
        id='sidebar-tooltip'
        className={cn("bg-text  text-card !z-[1400] !fixed", tooltipClassName)}
        place={side}
      />
    </>
  );
};

export default SidebarItem;
