"use client";

import { useHeaderContext } from "@/context/HeaderContext";
import ActionBtn from "./ActionBtn";
import { cn } from "@/lib/utils";

const ActionsBtns = ({ withoutDate }: { withoutDate?: boolean }) => {
  const { currentHeader } = useHeaderContext();
  console.log(currentHeader);

  return (
    <div className='w-full flex items-center justify-between my-4 flex-wrap gap-4 '>
      <p
        className={cn(
          "text-lg font-bold text-text",
          withoutDate && "opacity-0 pointer-events-none"
        )}
      >
        {currentHeader.date} {currentHeader.time}
      </p>
      <div className='flex items-center gap-4 flex-wrap'>
        <ActionBtn
          text=' Export CSV'
          className='bg-export-bg text-export-text'
        />
        <ActionBtn
          text=' Export HTML'
          className='bg-export-bg text-export-text'
        />
        <ActionBtn
          text=' Delete Entire Date'
          className='bg-delete-bg text-delete-text'
        />
      </div>
    </div>
  );
};

export default ActionsBtns;
