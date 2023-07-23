import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface NavButtonProps {
  isSelected: boolean;
  setTweetsCategory: () => void;
  children: ReactNode;
}

function NavButton({
  isSelected,
  setTweetsCategory,
  children,
}: NavButtonProps) {
  return (
    <button
      className={`hover:bg-onHover font-semibold ${isSelected ? "underline text-white" : "text-gray-600"}`}
      onClick={setTweetsCategory}>
      {children}
    </button>
  );
}

export default NavButton;
