"use client";

import { btns } from "@/constant/headerActionBtns";
import { useThemeDropDownContext } from "@/context/ThemeDropDownContext";
import SettingIcon from "@/svgs/SettingIcon";

import { Sun } from "lucide-react";

const ActionButtons = () => {
  const { isThemeDropDownOpen, setIsThemeDropDownOpen } =
    useThemeDropDownContext();
  const handleOpenDropDown = () => {
    setIsThemeDropDownOpen(!isThemeDropDownOpen);
  };
  return (
    <div className='hidden lg:flex items-center justify-end gap-4 pr-4 flex-1'>
      <button onClick={handleOpenDropDown} className='cursor-pointer'>
        <Sun size={22} />
      </button>
      <button className='text-sm text-foreground hover:text-text transition-colors'>
        <SettingIcon />
      </button>
      {btns.map((button, index) => (
        <button
          key={index}
          className='text-sm text-foreground hover:text-text transition-colors'
          aria-label={button.label}
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
