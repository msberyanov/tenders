import React from 'react';
import { CgSearch } from "react-icons/cg";

export const SearchBar: React.FC = () => {
  return (
    <div className="flex mr-4 items-center">
      <CgSearch className="fixed mr-[-10px] z-2 ml-[10px] text-white"/>
      <input
        className="placeholder:text-white bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] transition-background w-[200px] rounded-lg outline-none text-white p-1.5 z-1 pl-[35px]"
        placeholder="Поиск..."
      />
    </div>
  );
};