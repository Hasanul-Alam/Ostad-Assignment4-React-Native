import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full border border-gray-300 rounded-lg px-4 py-2">
      <input
        type="text"
        placeholder="Search..."
        className="focus:outline-none w-full"
        placeholderClassName="text-slate-500"
      />
    </div>
  );
};

export default SearchBar;
