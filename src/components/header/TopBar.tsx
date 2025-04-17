import DropDown from "./DropDown";
import { usePageContext } from "@/context/PageContext";
import { useHistory } from "@/context/HistoryContext";
import TopNav from "./TopNav";
import SearchFilters from "../searchEnginePage/SearchFilters";
import Devices from "../devicePage/Devices";
import Activity from "../activityPage/Activity";

const TopBar = () => {
  const { page } = usePageContext();
  const { categories } = useHistory();

  return (
    <>
      <div className='hidden lg:block'></div>
      {page === "activity" ? (
        <Activity />
      ) : page === "search" ? (
        <SearchFilters />
      ) : page === "device" ? (
        <Devices />
      ) : (
        <TopNav categoriesData={categories} />
      )}
      <DropDown />
    </>
  );
};

export default TopBar;
