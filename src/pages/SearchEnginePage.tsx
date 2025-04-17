import CardsArea from "@/components/CardsArea";
import SearchEngine from "@/components/searchEnginePage/SearchEngine";
import { useSearch } from "@/context/SearchFilterContext";
import MainLayout from "@/layout/MainLayout";

const SearchEnginePage = () => {
  const { searchActive } = useSearch();
  return (
    <MainLayout>
      <div></div>
      {!searchActive ? <SearchEngine /> : <CardsArea />}
    </MainLayout>
  );
};

export default SearchEnginePage;
