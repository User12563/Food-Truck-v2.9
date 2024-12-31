import React from 'react';
import { Menu, Search } from 'lucide-react';

export function Header() {
  return (
    <div className="px-4 py-3 bg-purple-50">
      <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
        <Menu className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Food Truck ..."
          className="flex-1 outline-none text-sm"
        />
        <Search className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
}