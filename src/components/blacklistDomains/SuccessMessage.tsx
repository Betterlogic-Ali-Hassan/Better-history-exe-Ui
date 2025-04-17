import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Check } from "lucide-react";
import { useBlackList } from "@/context/BlackListContext";

const SuccessMessage = () => {
  const { showSuccess } = useBlackList();
  return (
    <div>
      {showSuccess && (
        <div>
          <Alert className='bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-300 border-green-200 dark:border-green-900 py-2 transition-colors duration-300 ease-in-out'>
            <Check className='h-3 w-3' />
            <AlertTitle className='text-sm'>Success</AlertTitle>
            <AlertDescription className='text-xs'>
              Domain successfully added to blacklist
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default SuccessMessage;
