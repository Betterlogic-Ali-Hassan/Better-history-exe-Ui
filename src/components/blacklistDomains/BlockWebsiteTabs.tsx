import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useBlackList } from "@/context/BlackListContext";
import { cn } from "@/lib/utils";
import EntrieDomainIcon from "@/svgs/EntrieDomainIcon";
import RefreshIcon from "./RefreshIcon";
const BlockWebsiteTabs = () => {
  const { blockType, setBlockType } = useBlackList();
  return (
    <RadioGroup
      defaultValue='entire-domain'
      value={blockType}
      onValueChange={(value) =>
        setBlockType(value as "entire-domain" | "specific-path")
      }
      className='flex items-center justify-center gap-2 mt-4 mb-6'
    >
      <label
        htmlFor='entire-domain'
        className={cn(
          "flex flex-col items-center p-3 rounded-lg border-2 max-w-[230px] min-w-[230px] cursor-pointer transition-all duration-300 ease-in-out bg-card hover:bg-hover ",
          blockType === "entire-domain" && "border-badge bg-hover "
        )}
      >
        <RadioGroupItem
          value='entire-domain'
          id='entire-domain'
          className='sr-only'
        />
        <div className='w-full flex items-center justify-center mb-1'>
          <div className='p-1.5 rounded-full transition-colors duration-300 ease-in-out bg-background '>
            <EntrieDomainIcon className='transition-colors duration-300 ease-in-out  ' />
          </div>
        </div>
        <span className='text-sm font-medium transition-colors duration-300 ease-in-out text-text'>
          Block Entire Domain
        </span>
        <span className='text-xs text-foreground opacity-70  mt-0.5 text-center transition-colors duration-300 ease-in-out'>
          Blocks example.com and all its pages
        </span>
      </label>

      <label
        htmlFor='specific-path'
        className={cn(
          "flex flex-col items-center p-3 rounded-lg border-2 cursor-pointer transition-all max-w-[230px] min-w-[230px] min-w-[230px] duration-300 ease-in-out bg-card hover:bg-hover ",
          blockType === "specific-path" && "  border-hover bg-hover  "
        )}
      >
        <RadioGroupItem
          value='specific-path'
          id='specific-path'
          className='sr-only'
        />
        <div className='w-full flex items-center justify-center mb-1'>
          <div className='p-1.5 rounded-full transition-colors duration-300 ease-in-out bg-background '>
            <RefreshIcon />
          </div>
        </div>
        <span className='text-sm font-medium transition-colors duration-300 ease-in-out text-text '>
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
