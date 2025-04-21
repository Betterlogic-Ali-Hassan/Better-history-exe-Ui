import { cn } from "@/lib/utils";

const LinkSlash = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill='currentColor'
      className={cn("h-[26px] w-[26px]", className)}
    >
      <path d='m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302M634-440l-80-80h86v80zM792-56 56-792l56-56 736 736zM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85 35 85 85 35h160zM320-440v-80h65l79 80z'></path>
    </svg>
  );
};

export default LinkSlash;
