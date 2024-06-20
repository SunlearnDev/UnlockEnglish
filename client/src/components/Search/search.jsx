import React from 'react';
import { Input } from "@material-tailwind/react";
import { SearchIcon } from "@heroicons/react/outline";

const Search = () => {
  return (
    <div className="flex items-center bg-black p-2 rounded-md shadow-md">
      <SearchIcon className="h-6 w-6 text-white mr-2" />
      <Input 
        type="text" 
        placeholder="Search..." 
        className="bg-black text-white placeholder-gray-500 outline-none border-none focus:ring-0"
      />
    </div>
  );
}

export default Search;