import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useBlackList } from "@/context/BlackListContext";
import { cn } from "@/lib/utils";
const BlockWebsiteTabs = () => {
  const { blockType, setBlockType } = useBlackList();
  return (
    <RadioGroup
      defaultValue='entire-domain'
      value={blockType}
      onValueChange={(value) =>
        setBlockType(value as "entire-domain" | "specific-path")
      }
      className='grid grid-cols-1 sm:grid-cols-2 gap-2'
    >
      <label
        htmlFor='entire-domain'
        className={cn(
          "flex flex-col items-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ease-in-out border-border hover:border-hover ",
          blockType === "entire-domain" && "border-brand  bg-card  shadow-sm"
        )}
      >
        <RadioGroupItem
          value='entire-domain'
          id='entire-domain'
          className='sr-only'
        />
        <div className='w-full flex items-center justify-center mb-1'>
          <div
            className={cn(
              "p-1.5 rounded-full transition-colors duration-300 ease-in-out bg-background ",
              blockType === "entire-domain" && "bg-badge "
            )}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={`transition-colors duration-300 ease-in-out ${
                blockType === "entire-domain"
                  ? "text-slate-800 dark:text-slate-200"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <rect width='18' height='18' x='3' y='3' rx='2' />
              <path d='M7 7h.01' />
              <path d='M17 7h.01' />
              <path d='M7 17h.01' />
              <path d='M17 17h.01' />
            </svg>
          </div>
        </div>
        <span
          className={cn(
            "text-sm font-medium transition-colors duration-300 ease-in-out text-foreground opacity-80",
            blockType === "entire-domain" && "text-text "
          )}
        >
          Block Entire Website
        </span>
        <span className='text-xs text-foreground opacity-70  mt-0.5 text-center transition-colors duration-300 ease-in-out'>
          Blocks example.com and all its pages
        </span>
      </label>

      <label
        htmlFor='specific-path'
        className={cn(
          "flex flex-col items-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ease-in-out border-border hover:border-hover ",
          blockType === "specific-path" && "border-brand  bg-card  shadow-sm"
        )}
      >
        <RadioGroupItem
          value='specific-path'
          id='specific-path'
          className='sr-only'
        />
        <div className='w-full flex items-center justify-center mb-1'>
          <div
            className={cn(
              "p-1.5 rounded-full transition-colors duration-300 ease-in-out bg-background ",
              blockType === "specific-path" && "bg-badge "
            )}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={`transition-colors duration-300 ease-in-out ${
                blockType === "specific-path"
                  ? "text-slate-800 dark:text-slate-200"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <path d='M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
              <path d='M3 3v5h5' />
              <path d='M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16' />
              <path d='M16 16h5v5' />
            </svg>
          </div>
        </div>
        <span
          className={cn(
            "text-sm font-medium transition-colors duration-300 ease-in-out text-foreground opacity-80",
            blockType === "specific-path" && "text-text "
          )}
        >
          Block Specific Path
        </span>
        <span className='text-xs text-foreground opacity-70 mt-0.5 text-center transition-colors duration-300 ease-in-out'>
          Blocks only example.com/path/*
        </span>
      </label>
    </RadioGroup>
  );
};

export default BlockWebsiteTabs;
