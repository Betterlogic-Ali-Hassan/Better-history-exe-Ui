import { cn } from "@/lib/utils";
import CrossIcon from "@/svgs/CrossIcon";
import { useHandleDelete } from "../hooks/use-handle-delete";
import Button from "./ui/Button";
interface Props {
  id: number;
  text?: string;
  className?: string;
}
const DeleteEntry = ({ id, text, className }: Props) => {
  const handleDelete = useHandleDelete();

  const onDelete = () => {
    handleDelete(id, text);
  };
  return (
    <Button
      className={cn(
        "sm:opacity-0 opacity-100 cursor-pointer border-0 ring-0 !bg-transparent !p-0  group-hover:opacity-100",
        className
      )}
      onClick={onDelete}
    >
      <CrossIcon />
    </Button>
  );
};

export default DeleteEntry;
