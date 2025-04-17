import DropDown from "./DropDown";
import { usePageContext } from "@/context/PageContext";
import { useHistory } from "@/context/HistoryContext";
import TopNav from "./TopNav";
import SearchFilters from "../searchEnginePage/SearchFilters";
import Devices from "../devicePage/Devices";
import Activity from "../activityPage/Activity";
import ActionsBtns from "../activityPage/ActionsBtns";
import { useSearch } from "@/context/SearchFilterContext";

const TopBar = () => {
  const { page } = usePageContext();
  const { categories } = useHistory();
  const { searchActive } = useSearch();

  return (
    <>
      <div className='hidden lg:block'></div>
      {page === "activity" ? (
        <Activity />
      ) : page === "search" ? (
        <div>
          <SearchFilters />
          {searchActive && <ActionsBtns withoutDate={true} />}
        </div>
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
