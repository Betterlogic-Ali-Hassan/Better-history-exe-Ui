import { Trash2 } from "lucide-react";
import Button from "../ui/Button";
import { useBlackList } from "@/context/BlackListContext";

const DeleteDomainButton = () => {
  const { blacklistedDomains, selectedDomains, openBulkDeleteDialog } =
    useBlackList();
  return (
    <div className='bg-badge mb-4 flex justify-between items-center py-3 px-4 transition-colors duration-300 ease-in-out'>
      <div className='text-sm text-text transition-colors duration-300 ease-in-out'>
        {blacklistedDomains.length} items blacklisted
      </div>
      <div className='flex gap-2'>
        {selectedDomains.length > 0 && (
          <Button
            onClick={openBulkDeleteDialog}
            className='flex items-center gap-1.5 h-10 rounded-md transition-colors duration-300 ease-in-out'
          >
            <Trash2 className='h-4 w-4' />
            Delete Selected ({selectedDomains.length})
          </Button>
        )}
      </div>
    </div>
  );
};

export default DeleteDomainButton;
