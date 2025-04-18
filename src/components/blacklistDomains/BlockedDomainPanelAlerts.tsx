import { useBlackList } from "@/context/BlackListContext";
import { Switch } from "../ui/switch";
import { Info } from "lucide-react";

const BlockedDomainPanelAlerts = () => {
  const { blockType, includeSubdomains, setIncludeSubdomains } = useBlackList();
  return (
    <>
      <div>
        {blockType === "entire-domain" && (
          <div className='flex items-center space-x-2 p-1.5 py-2 bg-card   rounded mt-4 transition-colors duration-300 ease-in-out'>
            <Switch
              id='include-subdomains'
              checked={includeSubdomains}
              onCheckedChange={setIncludeSubdomains}
              className='scale-75'
            />
            <label
              htmlFor='include-subdomains'
              className='cursor-pointer text-sm text-text transition-colors duration-300 ease-in-out'
            >
              Include subdomains (e.g., *.example.com)
            </label>
          </div>
        )}
      </div>
      <div className='mt-3 text-sm text-text  space-y-1 bg-info   rounded min-h-10 py-2 flex   border border-border px-2  transition-colors duration-300 flex-col items-start ease-in-out'>
        <p className='flex items-center'>
          <Info className='h-4 w-4 mr-2  transition-colors duration-300 ease-in-out' />
          Domains must be in the format: example.com or regex pattern:
          /.*\.example\.com/
        </p>
        {blockType === "specific-path" && (
          <p className='flex items-center text-sm mt-2'>
            <Info className='h-4 w-4 mr-2 ' />
            Path patterns can include wildcards (*) like: /maps/* or
            /videos/*/comments
          </p>
        )}
      </div>
    </>
  );
};

export default BlockedDomainPanelAlerts;
