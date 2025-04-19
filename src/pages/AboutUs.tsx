import About from "@/components/aboutPage/About";

import MainLayout from "@/layout/MainLayout";

export default function AboutUs() {
  return (
    <MainLayout className='no-scrollbar'>
      <>
        <div className='w-[260px]'></div>
        <About />
      </>
    </MainLayout>
  );
}
