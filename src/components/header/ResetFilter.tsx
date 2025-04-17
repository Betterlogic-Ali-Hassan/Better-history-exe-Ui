import { SwiperSlide } from "swiper/react";

import { ChevronLeft } from "lucide-react";
import Button from "../ui/Button";
import { useHistory } from "@/context/HistoryContext";

const ResetFilter = () => {
  const { setSelectedCategories, selectedCategories } = useHistory();
  const handleClearFilter = () => {
    setSelectedCategories([]);
  };
  return (
    <>
      {selectedCategories.length > 0 && (
        <SwiperSlide className='max-w-fit'>
          <Button
            onClick={handleClearFilter}
            className='h-9 px-2 mr-2 bg-transparent hover:bg-transparent ring-0'
          >
            <ChevronLeft size={20} />
            <span>All</span>
          </Button>
        </SwiperSlide>
      )}
    </>
  );
};

export default ResetFilter;
