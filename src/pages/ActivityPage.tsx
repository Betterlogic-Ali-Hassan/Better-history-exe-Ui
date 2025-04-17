import CardsArea from "@/components/CardsArea";
import MainLayout from "@/layout/MainLayout";

export default function ActivityPage() {
  return (
    <MainLayout className='no-scrollbar'>
      <>
        <div className='w-[260px]'></div>
        <CardsArea />
      </>
    </MainLayout>
  );
}
