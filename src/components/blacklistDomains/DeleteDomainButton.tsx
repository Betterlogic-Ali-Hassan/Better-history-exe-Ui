import { Trash2 } from "lucide-react";
import Button from "../ui/Button";
import { useBlackList } from "@/context/BlackListContext";

const DeleteDomainButton = () => {
  const { blacklistedDomains, selectedDomains, openBulkDeleteDialog } =
    useBlackList();
  return (
    <div className='bg-slate-50 dark:bg-[hsl(var(--card))] border-t border-slate-100 dark:border-[hsl(var(--border))] flex justify-between py-3 px-4 transition-colors duration-300 ease-in-out'>
      <div className='text-xs text-slate-500 dark:text-slate-400 transition-colors duration-300 ease-in-out'>
        {blacklistedDomains.length} items blacklisted
      </div>
      <div className='flex gap-2'>
        {selectedDomains.length > 0 && (
          <Button
            onClick={openBulkDeleteDialog}
            className='flex items-center gap-1 h-7 text-xs transition-colors duration-300 ease-in-out'
          >
            <Trash2 className='h-3 w-3' />
            Delete Selected ({selectedDomains.length})
          </Button>
        )}
      </div>
    </div>
  );
};

export default DeleteDomainButton;
