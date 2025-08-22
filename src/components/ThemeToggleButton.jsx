import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { ToastContainer, toast } from "react-toastify";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        onClick={() => {
          toggleTheme();
          toast.success("Theme Changed");
        }}
        className="h-[45px] w-[60px] bg-[#6c63ff] hover:bg-[#5249f8] flex items-center justify-center cursor-pointer rounded-lg transition-all duration-300 hover:scale-110"
      >
        {theme === "light" ? (
          <i className="fa-solid fa-moon text-white text-3xl"></i>
        ) : (
          <i className="fa-solid fa-sun text-white text-3xl"></i>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === "light" ? "dark" : "light"}
      />
    </>
  );
};

export default ThemeToggleButton;
