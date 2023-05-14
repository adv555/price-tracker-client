import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="py-1 ml-4 md:mx-8 relative  text-gray-600 w-full">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-0 top-0 mt-4 mr-4">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400 hover:text-gray-500"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default SearchBar;
