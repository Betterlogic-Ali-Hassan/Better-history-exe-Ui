import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { FeedbackForm } from "../FeedbackForm";
import { useFeedBack } from "@/context/FeedbackDialogContex";
const FeedBack = () => {
  const { open, setOpen } = useFeedBack();
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className='hidden'>Open</DialogTrigger>
        <DialogContent className='rounded-[32px]  !max-w-[580px]'>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
            <FeedbackForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeedBack;
