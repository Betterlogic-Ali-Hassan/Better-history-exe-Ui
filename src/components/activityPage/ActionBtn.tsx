import { cn } from "@/lib/utils";
import Button from "../ui/Button";

const ActionBtn = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <Button
      className={cn(
        "border-border  rounded-[20px] border-dotted border-2 bg-card max-sm:w-full cursor-pointer hover:bg-hover px-[18px] py-2 font-semibold text-[10px] !ring-0 ",
        className
      )}
    >
      {text}
    </Button>
  );
};

export default ActionBtn;
