import React from 'react';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { MenuItemCard } from '../components/MenuItemCard';
import { useFavorites } from '../hooks/useFavorites';

export function FavoritesPage() {
  const { items } = useFavorites();

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header />
      <main className="px-4">
        <h2 className="text-sm mb-2">Vos favoris</h2>
        {items.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">
            Vous n'avez pas encore de favoris
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {items.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
      <BottomNav activeTab="favoris" />
    </div>
  );
}