import { useBlackList } from "@/context/BlackListContext";

const BlackListedDomainSearch = () => {
  const { searchQuery, setSearchQuery } = useBlackList();
  return (
    <div className='flex justify-between items-center mb-4 mt-5'>
      <h3 className='text-lg font-medium text-text transition-colors duration-300 ease-in-out'>
        Blacklisted Domains
      </h3>
      <div className='flex gap-2'>
        <input
          placeholder='Search domains...'
          className='w-[250px] transition-colors duration-300 ease-in-out input rounded'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BlackListedDomainSearch;
