import { useHistory } from "@/context/HistoryContext";
import { toast } from "react-toastify";
export const useHandleDelete = () => {
  const { deleteCard } = useHistory();
  return (ids: number[] | number, text?: string) => {
    if (Array.isArray(ids)) {
      if (ids.length === 0) {
        toast.error("No bookmarks selected for deletion");
        return;
      }

      deleteCard(ids);
      toast.success(text ? text : "Selected Bookmarks Deleted");
    } else {
      deleteCard(ids);
      toast.success(text ? text : "Bookmark Deleted");
    }
  };
};
