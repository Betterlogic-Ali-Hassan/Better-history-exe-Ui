import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Check } from "lucide-react";
import { useBlackList } from "@/context/BlackListContext";

const SuccessMessage = () => {
  const { showSuccess } = useBlackList();
  return (
    <>
      {showSuccess && (
        <div>
          <Alert className='bg-success  text-success-text  border-success-border mt-4 rounded py-2 transition-colors duration-300 ease-in-out'>
            <Check className='h-4 w-4' />
            <AlertTitle className='text-sm'>Success</AlertTitle>
            <AlertDescription className='text-xs'>
              Domain successfully added to blacklist
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
};

export default SuccessMessage;
