import React from 'react';

const categories = [
  'All', 'Popular', 'Recent', 'Recommended'
];

export function CategoryList() {
  return (
    <div className="px-4 py-3">
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap text-sm ${
              index === 0 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}