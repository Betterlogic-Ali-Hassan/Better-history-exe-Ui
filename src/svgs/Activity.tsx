import { cn } from "@/lib/utils";

const Activity = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      className={cn("h-[26px] w-[26px]", className)}
      fill='currentColor'
    >
      <path d='M80-600v-160q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v160h-80v-160H160v160zm80 360q-33 0-56.5-23.5T80-320v-200h80v200h640v-200h80v200q0 33-23.5 56.5T800-240zM40-120v-80h880v80zm40-400v-80h240q11 0 21 6t15 16l47 93 123-215q5-9 14-14.5t20-5.5 21 5.5 15 16.5l49 98h235v80H620q-11 0-21-5.5T584-542l-26-53-123 215q-5 10-15 15t-21 5-20.5-6-14.5-16l-69-138z'></path>
    </svg>
  );
};

export default Activity;
