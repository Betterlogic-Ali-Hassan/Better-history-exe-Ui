import { useHistory } from "@/context/HistoryContext";
import CrossIcon from "../../svgs/CrossIcon";
import SelectIcon from "@/svgs/SelectIcon";
import Button from "../ui/Button";
interface Props {
  setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}
const DropDownContent = ({ setOpenDropDown }: Props) => {
  const { setShowSelectionCard, selectAll, clearSelection, showSelectionCard } =
    useHistory();

  const toggleSelectionCard = (show: boolean) => {
    setShowSelectionCard(show);
    if (!show) clearSelection();
  };

  return (
    <div className='absolute right-2 top-10 lg:right-1 lg:top-7 z-30 w-48 origin-top-right rounded bg-background border border-border  py-1 shadow-lg  focus:outline-none'>
      {!showSelectionCard && (
        <DropDownButton
          onClick={() => toggleSelectionCard(true)}
          icon={<SelectIcon />}
          text='Select multiple'
        />
      )}
      <DropDownButton
        onClick={() => {
          toggleSelectionCard(true);
          selectAll();
          setOpenDropDown(false);
        }}
        icon={<SelectIcon />}
        text='Select all'
      />
      {showSelectionCard && (
        <DropDownButton
          onClick={() => toggleSelectionCard(false)}
          icon={<CrossIcon />}
          text='Cancel selection'
        />
      )}
    </div>
  );
};

const DropDownButton = ({
  onClick,
  icon,
  text,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
}) => (
  <Button
    className='px-4 py-2 text-sm text-text text-start w-full flex items-center gap-3 bg-transparent border-0 ring-0'
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
  </Button>
);

export default DropDownContent;
