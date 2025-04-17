const SearchEngine = () => {
  return (
    <div>
      <div className='bg-card rounded-[12px] border border-border p-4'>
        <h3 className='text-lg mb-3 font-medium'>How to use the search tool</h3>
        <p className='mb-4 text-sm'>
          This tool allows you to search your browsing history effectively using
          simple keywords or advanced Regular Expressions (RegEx). Below are
          some examples to help you get started:
        </p>
        <ul className='list-disc ml-4 text-sm'>
          <li className='ml-2 mb-[18px]'>
            <b>Basic Search:</b> Type any keyword to find matching entries
            (e.g., "Inbox").
          </li>

          <li className='ml-2 mb-[18px]'>
            <b>Starts with:</b> Use ^ to find entries that start with a specific
            word (e.g., ^Inbox).
          </li>
          <li className='ml-2 mb-[18px]'>
            <b>Contains Multiple Words:</b> Use | to search for entries
            containing one of several words (e.g., News|Info).
          </li>
          <li className='ml-2 mb-[18px]'>
            <b>Numbers Only:</b> Use \d+ to find entries with numbers.
          </li>
          <li className='ml-2 mb-[18px]'>
            <b>Case Sensitivity:</b> Searches are case-insensitive by default.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchEngine;
