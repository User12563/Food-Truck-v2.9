import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="px-4 py-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
}