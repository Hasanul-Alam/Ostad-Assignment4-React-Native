import React from "react";

const SearchBar = ({ onChange, value }) => {
  return (
    <div className="w-full border border-gray-300 rounded-lg px-4 py-2">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        className="focus:outline-none w-full"
        placeholderClassName="text-slate-500"
      />
    </div>
  );
};

export default SearchBar;
