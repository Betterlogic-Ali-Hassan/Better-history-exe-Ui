import DocumentationIcon from "@/svgs/DocumentationIcon";
import ExistIcon from "@/svgs/ExistIcon";
import DownloadIcon from "@/svgs/DownloadIcon";
import Activity from "@/svgs/Activity";
import Devices from "@/svgs/Devices";
import SearchEngineIcon from "@/svgs/SearchEngineIcon";
import LinkSlash from "@/svgs/LinkSlash";

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
    icon: <DocumentationIcon />,
    tooltip: "Documentation",
    link: "advExport",
  },
  {
    icon: <ExistIcon />,
    tooltip: "Logout",
    link: "logout",
  },
];
