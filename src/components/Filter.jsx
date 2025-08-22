import React from "react";

const Filter = ({ value, onChange }) => {
  return (
    <div className="relative">
      <select
        name="cars"
        id="cars"
        className="appearance-none w-[160px] h-[45px] px-3 pr-8 rounded-lg border border-gray-300 bg-white dark:bg-black dark:text-white text-gray-700  focus:outline-none focus:ring-2 focus:ring-[#6c63ff] transition duration-200 cursor-pointer"
        value={value}
        onChange={onChange}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>

      {/* Custom dropdown arrow (FontAwesome) */}
      <i className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
    </div>
  );
};

export default Filter;
