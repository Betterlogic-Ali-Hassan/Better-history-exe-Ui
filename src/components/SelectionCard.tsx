import { cn } from "@/lib/utils";
import { toast } from "react-toastify";
import { useCallback } from "react";
import { useHistory } from "@/context/HistoryContext";
import { useHandleDelete } from "@/hooks/use-handle-delete";
import CrossIcon from "@/svgs/CrossIcon";
import OpenIcon from "@/svgs/OpenIcon";
import CopytoClipboard from "@/svgs/CopytoClipboard";
import AlertDialogBox from "./modals/AlertDialogBox";
import Button from "./ui/Button";

const SelectionCard = () => {
  const {
    selectedCardUrls,
    clearSelection,
    setShowSelectionCard,
    selectedCards,
    setSelectedCards,
    showSelectionCard,
  } = useHistory();
  const handleCopy = () => {
    if ((selectedCardUrls?.length || 0) > 0) {
      const urlsToCopy = selectedCardUrls && selectedCardUrls.join("\n");
      navigator.clipboard.writeText(urlsToCopy ? urlsToCopy : "");
      toast.success("URLs Copied");
    } else {
      toast.error("No URL Selected");
    }
  };

  const handleOpenLinks = () => {
    if ((selectedCardUrls?.length || 0) > 0) {
      (selectedCardUrls || []).forEach((url) => window.open(url, "_blank"));
    } else {
      toast.error("No URL Selected");
    }
  };
  const handleCancel = useCallback(() => {
    console.log("clicked");
    clearSelection();
    setShowSelectionCard(false);
  }, [clearSelection, setShowSelectionCard]);

  const isDisabled = selectedCards.length === 0;
  const handleDelete = useHandleDelete();

  const onDelete = () => {
    setShowSelectionCard(false);
    setSelectedCards([]);
    handleDelete(selectedCards);
  };
  return (
    <div
      className={cn(
        "block relative lg:max-w-[280px] max-w-[400px] w-full max-[1600px]:fixed  max-[1600px]:right-8 max-lg:right-1/2  max-lg:left-1/2 max-lg:translate-x-[-50%] z-[2000]  opacity-0 pointer-events-none  translate-x-[100%] transition-all duration-300 min-[1600px]:ml-2 ",
        showSelectionCard &&
          "opacity-100 translate-x-0 max-lg:bottom-6 pointer-events-auto "
      )}
    >
      <div className='sticky top-0 left-0 w-full lg:max-w-[280px] lg:min-w-72 max-w-[400px]  '>
        <div>
          <div className='text-sm flex flex-col items-start text-text z-30 rounded-md bg-card overflow-hidden'>
            <div className='rounded-t-md py-2 px-4 font-medium  text-text  bg-selected-hover w-full whitespace-nowrap flex items-center justify-between'>
              <span>{selectedCards.length} selected</span>
              <Button
                className='text-foreground hover:text-text bg-background rounded-full border border-border  p-1 '
                onClick={handleCancel}
              >
                <CrossIcon />
              </Button>
            </div>

            <Button
              className='bg-transparent border-0 ring-0  w-full py-3 px-4 font-normal  text-left whitespace-nowrap flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50'
              disabled={isDisabled}
              onClick={handleOpenLinks}
            >
              <OpenIcon />
              Open
            </Button>
            <Button
              className='bg-transparent border-0 ring-0 w-full py-3 px-4 font-normal text-left whitespace-nowrap flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50'
              disabled={isDisabled}
              onClick={handleCopy}
            >
              <CopytoClipboard />
              Copy URLs
            </Button>

            <AlertDialogBox
              onClick={onDelete}
              disabled={isDisabled}
              className='bg-transparent hover:bg-btn-hover border-0 ring-0  w-full py-3 px-4 text-left whitespace-nowrap flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer text-foreground [&_svg]:text-foreground'
              allowText
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionCard;
