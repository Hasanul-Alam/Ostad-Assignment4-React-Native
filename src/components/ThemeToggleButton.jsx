import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div
      onClick={toggleTheme}
      className="h-[45px] w-[60px] bg-[#6c63ff] hover:bg-[#5249f8] flex items-center justify-center cursor-pointer rounded-lg transition-all duration-300 hover:scale-110"
    >
      {/* <i className="fa-solid fa-moon text-white text-3xl"></i> */}
      <i className="fa-solid fa-sun text-white text-3xl"></i>
    </div>
  );
};

export default ThemeToggleButton;
