import { useBlackList } from "@/context/BlackListContext";

const BlackListedDomainSearch = () => {
  const { searchQuery, setSearchQuery } = useBlackList();
  return (
    <div className='flex justify-between items-center mb-3'>
      <h3 className='text-sm font-medium dark:text-slate-200 transition-colors duration-300 ease-in-out'>
        Blacklisted Domains
      </h3>
      <div className='flex gap-2'>
        <input
          placeholder='Search domains...'
          className='w-[180px] h-7 text-xs transition-colors duration-300 ease-in-out dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BlackListedDomainSearch;
