import { usePageContext } from "@/context/PageContext";

import { IoMdDownload } from "react-icons/io";
import Devices from "@/svgs/Devices";
import Activity from "@/svgs/Activity";

const DataNotFound = () => {
  const { page } = usePageContext();
  const pageTitles: Record<string, React.ReactNode> = {
    downloads: <IoMdDownload size={28} />,
    activity: <Activity className='h-[28px] w-[28px]' />,
    devices: <Devices className='h-[28px] w-[28px]' />,
  };
  return (
    <div className='text-center pt-10 flex items-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      {pageTitles[page]}

      <p className='mt-3 text-sm text-foreground  truncate'>
        Nothing found Data
      </p>
    </div>
  );
};

export default DataNotFound;
