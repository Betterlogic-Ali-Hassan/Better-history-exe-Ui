import { useBlackList } from "@/context/BlackListContext";
import { Switch } from "../ui/switch";
import { Info } from "lucide-react";

const BlockedDomainPanelAlerts = () => {
  const { blockType, includeSubdomains, setIncludeSubdomains } = useBlackList();
  return (
    <>
      <div>
        {blockType === "entire-domain" && (
          <div className='flex items-center space-x-2 p-1.5 bg-slate-50 dark:bg-slate-900 rounded-md mt-2 transition-colors duration-300 ease-in-out'>
            <Switch
              id='include-subdomains'
              checked={includeSubdomains}
              onCheckedChange={setIncludeSubdomains}
              className='scale-75'
            />
            <label
              htmlFor='include-subdomains'
              className='cursor-pointer text-xs dark:text-slate-300 transition-colors duration-300 ease-in-out'
            >
              Include subdomains (e.g., *.example.com)
            </label>
          </div>
        )}
      </div>
      <div className='mt-3 text-xs text-slate-500 dark:text-slate-400 space-y-1 bg-blue-50 dark:bg-blue-950 p-2 rounded-md border border-blue-100 dark:border-blue-900 transition-colors duration-300 ease-in-out'>
        <p className='flex items-center'>
          <Info className='h-3 w-3 mr-1.5 text-blue-500 dark:text-blue-400 transition-colors duration-300 ease-in-out' />
          Domains must be in the format: example.com or regex pattern:
          /.*\.example\.com/
        </p>
        {blockType === "specific-path" && (
          <p className='flex items-center'>
            <Info className='h-3 w-3 mr-1.5 text-blue-500 dark:text-blue-400 transition-colors duration-300 ease-in-out' />
            Path patterns can include wildcards (*) like: /maps/* or
            /videos/*/comments
          </p>
        )}
      </div>
    </>
  );
};

export default BlockedDomainPanelAlerts;
