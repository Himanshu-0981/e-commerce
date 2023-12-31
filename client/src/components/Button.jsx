import React from "react";

function Button({ title, handleClick, className = "", icon }) {
  const classNames = {
    bgTeal:
      " flex items-center gap-3 rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow",
    bgGray:
      "flex items-center gap-3 rounded-md bg-gray-200 px-5 py-1.5 text-sm font-medium text-green-600 hover:bg-gray-300 duration-200",
    bgRed:
      "flex items-center gap-3 rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow",
    bgGreen:
      "flex items-center gap-3 rounded-md bg-green-700 hover:bg-green-800 duration-200  px-5 py-2.5 text-sm font-medium text-white shadow",
    bgOrange:
      "rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow",
    bgYellow:
      "flex items-center gap-3 rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-white shadow",
  };
  const buttonClass = classNames[className] || classNames.bgRed;

  return (
    <button onClick={handleClick} className={buttonClass}>
      {title} {icon}
    </button>
  );
}

export default Button;
