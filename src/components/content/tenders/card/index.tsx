import React from 'react';

interface TendersCardProps {
  index: number;
}

export const TendersCard: React.FC<TendersCardProps> = ({
  index
}) => {
  return (
    <div className="flex items-start justify-start h-[calc(33.333333%)] w-[calc(25%)]">
      <div className="w-[calc(100%-20px)] h-[calc(100%-20px)] bg-[rgba(255,255,255,0.3)] rounded-2xl hover:bg-[rgba(255,255,255,0.4)] cursor-pointer transition-background">
        <div className="text-xl font-medium text-white ml-[15px] mt-[15px]">Тендер #{index + 1}</div>
      </div>
    </div>
  );
};