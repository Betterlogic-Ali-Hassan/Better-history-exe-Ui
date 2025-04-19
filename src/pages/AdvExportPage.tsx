import AdvExport from "@/components/advExport/AdvExport";

import MainLayout from "@/layout/MainLayout";

export default function AdvExportPage() {
  return (
    <MainLayout className='no-scrollbar'>
      <>
        <div className='w-[260px]'></div>
        <AdvExport />
      </>
    </MainLayout>
  );
}
