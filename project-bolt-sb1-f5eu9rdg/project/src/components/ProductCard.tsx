import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  rating: number;
}

export function ProductCard({ image, title, price, rating }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-blue-600 font-semibold">{price}</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600 ml-1">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}