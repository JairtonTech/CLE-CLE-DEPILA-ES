import React from 'react';
import { PROFILE_IMAGE_URL } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3 mb-2 md:mb-0">
          <img 
            src={PROFILE_IMAGE_URL} 
            alt="Cle Cle Logo" 
            className="w-12 h-12 rounded-full object-cover border-2 border-teal-500 shadow-md"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wider uppercase">Cle Cle Depilações</h1>
            <p className="text-teal-400 text-xs md:text-sm font-medium">Especialista em Masculina</p>
          </div>
        </div>
        <div className="text-xs md:text-sm text-slate-400 font-light hidden md:block">
          Desde 2002 cuidando de você
        </div>
      </div>
    </header>
  );
};