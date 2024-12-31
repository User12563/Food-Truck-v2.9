import React from 'react';
import { Heart } from 'lucide-react';
import { MenuItem } from '../data/menuItems';
import { useFavorites } from '../hooks/useFavorites';
import { useCart } from '../hooks/useCart';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addItem } = useCart();
  const favorite = isFavorite(item.id);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        <button 
          onClick={() => toggleFavorite(item)}
          className={`absolute top-2 right-2 p-1.5 bg-white rounded-full ${
            favorite ? 'text-red-500' : 'text-gray-600'
          }`}
        >
          <Heart className="w-5 h-5" fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-purple-600 font-semibold">{item.price.toFixed(2)}€</span>
          <button
            onClick={() => addItem(item)}
            className="bg-purple-700 text-white px-4 py-1 rounded-full text-sm"
          >
            Commander
          </button>
        </div>
      </div>
    </div>
  );
}