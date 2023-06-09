import React from "react";

type TabButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => {
  const buttonClasses = active ? "bg-[#9DFF94] text-black" : "bg-[#111315] text-[#535557]";

  return (
    <button className={`px-6 py-3 rounded-lg ${buttonClasses}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default TabButton;
