import { AlertTriangle, Trash2 } from "lucide-react";
import Button from "../ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { AlertDialogHeader } from "../ui/alert-dialog";
import { useBlackList } from "@/context/BlackListContext";

const DeleteDialog = () => {
  const {
    deleteDialogOpen,
    setDeleteDialogOpen,
    bulkDeleteMode,
    selectedDomains,
    handleDeleteDomain,
    blacklistedDomains,
    domainToDelete,
  } = useBlackList();

  return (
    <>
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className='sm:max-w-md transition-colors duration-300 ease-in-out bg-background rounded-[32px] p-6 '>
          <AlertDialogHeader>
            <DialogTitle className='flex items-center gap-2 text-error  text-base transition-colors duration-300 ease-in-out'>
              <AlertTriangle className='h-4 w-4' />
              Confirm Deletion
            </DialogTitle>
            <DialogDescription className='text-sm  max-w-[370px] text-foreground transition-colors duration-300 ease-in-out'>
              {bulkDeleteMode
                ? selectedDomains.length > 0
                  ? `Are you sure you want to delete ${
                      selectedDomains.length
                    } selected item${selectedDomains.length > 1 ? "s" : ""}?`
                  : "Are you sure you want to clear all blacklisted domains?"
                : "Are you sure you want to delete this domain from the blacklist?"}
            </DialogDescription>
          </AlertDialogHeader>
          <div className='py-3'>
            {bulkDeleteMode && selectedDomains.length === 0 ? (
              <div className='text-center p-3 bg-error-light  rounded-md text-error text-xs transition-colors duration-300 ease-in-out'>
                This will permanently remove all domains from your blacklist.
              </div>
            ) : bulkDeleteMode ? (
              <div className='max-h-32 overflow-y-auto p-2 border rounded-md text-xs border-border transition-colors duration-300 ease-in-out'>
                {selectedDomains.map((id) => {
                  const domain = blacklistedDomains.find((d) => d.id === id);
                  return domain ? (
                    <div
                      key={id}
                      className='py-1 border-b border-border last:border-0 transition-colors duration-300 ease-in-out'
                    >
                      <span className='font-medium text-text transition-colors duration-300 ease-in-out'>
                        {domain.domain}
                      </span>
                      {domain.pathPattern && (
                        <span className='text-xs text-text transition-colors duration-300 ease-in-out'>
                          {" "}
                          (Path: {domain.pathPattern})
                        </span>
                      )}
                    </div>
                  ) : null;
                })}
              </div>
            ) : domainToDelete ? (
              <div className='p-3 bg-error-light  rounded-md text-xs transition-colors duration-300 ease-in-out'>
                {(() => {
                  const domain = blacklistedDomains.find(
                    (d) => d.id === domainToDelete
                  );
                  return domain ? (
                    <div className='text-text text-sm transition-colors duration-300 ease-in-out'>
                      <span className='font-medium'>{domain.domain}</span>
                      {domain.pathPattern && (
                        <span> (Path: {domain.pathPattern})</span>
                      )}
                      {domain.includeSubdomains && (
                        <span> (Including subdomains)</span>
                      )}
                    </div>
                  ) : null;
                })()}
              </div>
            ) : null}
          </div>
          <DialogFooter className='flex justify-between sm:justify-between'>
            <Button
              onClick={() => setDeleteDialogOpen(false)}
              className=' rounded transition-colors duration-300 ease-in-out '
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeleteDomain}
              className=' transition-colors duration-300 ease-in-out   hover:bg-error-light rounded'
            >
              <Trash2 className='mr-2 h-4 w-4' />
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
