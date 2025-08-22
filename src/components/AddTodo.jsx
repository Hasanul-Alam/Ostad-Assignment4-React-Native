import React from "react";
import { FaPlus } from "react-icons/fa";

const AddTodo = () => {
  return (
    <button className="h-[45px] w-[60px] bg-[#6c63ff] hover:bg-[#5249f8] cursor-pointer text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
      <FaPlus color="white" size={25} />
    </button>
  );
};

export default AddTodo;
