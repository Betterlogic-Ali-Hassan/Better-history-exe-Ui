import { Info } from "lucide-react";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const InfoTooltip =
    "Blacklisted domains won't be recorded in your browsing history. All past and future visits will be automatically removed.";
  return (
    <div>
      <h1 className='flex items-center gap-2 text-lg font-semibold '>
        Domain Blacklist
        <span data-tooltip-id='info-tooltip' data-tooltip-content={InfoTooltip}>
          <Info className='h-5 w-5' />
        </span>
      </h1>
      <p>
        Prevent specific websites or paths from being recorded in your browsing
        history
      </p>
      <Tooltip
        id='info-tooltip'
        className='bg-text  text-card  '
        place='right'
      />
    </div>
  );
};

export default Header;
