import React from 'react';
import { ServiceItem } from '../types';

interface PriceRowProps {
  item: ServiceItem;
}

export const PriceRow: React.FC<PriceRowProps> = ({ item }) => {
  return (
    <div className="flex items-end justify-between py-2 group hover:bg-slate-100 px-2 rounded transition-colors">
      <span className="text-slate-700 font-medium text-lg relative z-10 bg-inherit pr-2">
        {item.name}
      </span>
      
      {/* Dot leader visual effect */}
      <div className="flex-grow border-b-2 border-dotted border-slate-300 mb-1.5 mx-1 opacity-50"></div>
      
      <span className="text-teal-700 font-bold text-lg relative z-10 bg-inherit pl-2 whitespace-nowrap">
        {item.price}
      </span>
    </div>
  );
};