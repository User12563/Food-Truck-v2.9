import React from 'react';
import { Heart } from 'lucide-react';

interface MenuItemProps {
  title: string;
  description: string;
}

export function MenuItem({ title, description }: MenuItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <div className="flex items-start gap-3">
        <div className="text-purple-700">★</div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Heart className="w-5 h-5 text-gray-400" />
        <button className="bg-purple-700 text-white px-4 py-1 rounded-full text-sm">
          Commander
        </button>
      </div>
    </div>
  );
}