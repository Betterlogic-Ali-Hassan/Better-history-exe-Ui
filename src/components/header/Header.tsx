import Searchbar from "../Searchbar";
import ActionBtns from "./ActionBtns";
import DownloadIcon from "@/svgs/DownloadIcon";
import { JSX } from "react";
import { usePageContext } from "@/context/PageContext";
import Activity from "@/svgs/Activity";
import Devices from "@/svgs/Devices";
import SearchEngineIcon from "@/svgs/SearchEngineIcon";
import LinkSlash from "@/svgs/LinkSlash";
const iconsMap: Record<string, JSX.Element> = {
  search: <SearchEngineIcon className='h-[28px] w-[28px]' />,
  activity: <Activity className='h-[28px] w-[28px]' />,
  downloads: <DownloadIcon className='h-[28px] w-[28px]' />,
  device: <Devices className='h-[28px] w-[28px]' />,
  blacklist: <LinkSlash className='h-[28px] w-[28px]' />,
};
const Header = () => {
  const { page } = usePageContext();
  const IconComponent = iconsMap[page?.toLowerCase()];
  return (
    <>
      <div className='pl-[100px] py-2 h-[56px] flex items-center gap-2 text-text'>
        {IconComponent}
        <h2 className='text-xl font-semibold  capitalize '>{page}</h2>
      </div>
      <Searchbar />
      <ActionBtns />
    </>
  );
};

export default Header;
