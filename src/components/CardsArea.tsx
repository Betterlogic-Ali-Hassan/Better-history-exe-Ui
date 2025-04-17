import { useHistory } from "@/context/HistoryContext";

import TabsCards from "./Cards";
import { BackToTopContainer } from "./BackToTop";
import ThemeCards from "./themeCards/ThemeCards";
import DataNotFound from "./DataNotFound";
import SelectionCard from "./SelectionCard";

const CardsArea = () => {
  const { cards } = useHistory();

  return (
    <BackToTopContainer className='block lg:grid lg:col-span-2 lg:grid-cols-subgrid   overflow-y-auto no-scrollbar lg:overflow-y-scroll overflow-x-hidden grow pb-4 lg:pb-6 max-lg:pl-[100px] max-sm:pl-[80px] max-lg:pt-2'>
      {cards.length > 0 ? (
        <>
          <TabsCards cards={cards} />
          <SelectionCard />
          <ThemeCards />
        </>
      ) : (
        <DataNotFound />
      )}
    </BackToTopContainer>
  );
};

export default CardsArea;
