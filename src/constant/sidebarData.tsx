import DownloadIcon from "@/svgs/DownloadIcon";
import Activity from "@/svgs/Activity";
import Devices from "@/svgs/Devices";
import SearchEngineIcon from "@/svgs/SearchEngineIcon";
import LinkSlash from "@/svgs/LinkSlash";
import FileExport from "@/svgs/FileExport";
import About from "@/svgs/About";

export const sidebarData = [
  {
    icon: <Activity />,
    tooltip: "Activity",
    link: "activity",
  },
  {
    icon: <Devices />,
    tooltip: "Devices",
    link: "device",
  },
  {
    icon: <SearchEngineIcon />,
    tooltip: "Search Engine",
    link: "search",
  },
  {
    icon: <DownloadIcon />,
    tooltip: "Downloads",
    link: "downloads",
  },
  {
    icon: <LinkSlash />,
    tooltip: "Blacklist Domain",
    link: "blackList",
  },
];
export const sidebarDataBottom = [
  {
    icon: <FileExport />,
    tooltip: "Advance Export",
    link: "advExport",
  },
  {
    icon: <About />,
    tooltip: "About Us",
    link: "about",
  },
];
