import { cn } from "@/lib/utils";

interface buttonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
  disabled?: boolean;
  title?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  type,
  children,
  className,
  onClick,
  id,
  disabled,
  title,
}: buttonProps) => {
  return (
    <button
      id={id}
      disabled={disabled}
      title={title}
      className={cn(
        "rounded bg-card cursor-pointer  px-3 py-2 text-sm font-semibold text-text  ring-1 ring-inset ring-border hover:bg-btn-hover   disabled:cursor-not-allowed whitespace-nowrap flex items-center",
        className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
