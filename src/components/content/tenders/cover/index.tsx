import React from 'react';
import { TendersCard } from "../card";

export const TendersCover: React.FC = () => {
  return (
    <div className="flex flex-wrap w-full h-full ml-[20px] mt-[20px]">
      {Array.from(Array(20)).map((_, index) => <TendersCard index={index}/>)}
    </div>
  );
};