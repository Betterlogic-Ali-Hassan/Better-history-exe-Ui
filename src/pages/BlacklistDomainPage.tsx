import BlackListDomains from "@/components/blacklistDomains/BlackListDomains";

import MainLayout from "@/layout/MainLayout";

export default function BlacklistDomainPage() {
  return (
    <MainLayout className='no-scrollbar'>
      <>
        <div className='w-[260px]'></div>
        <BlackListDomains />
      </>
    </MainLayout>
  );
}
