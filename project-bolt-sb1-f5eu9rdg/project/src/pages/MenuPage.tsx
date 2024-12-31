import React from 'react';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { MenuSection } from '../components/MenuSection';
import { menuItems } from '../data/menuItems';

export function MenuPage() {
  const entrees = menuItems.filter((item) => item.category === 'entrees');
  const plats = menuItems.filter((item) => item.category === 'plats');
  const desserts = menuItems.filter((item) => item.category === 'desserts');
  const boissons = menuItems.filter((item) => item.category === 'boissons');

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header />
      <main className="px-4">
        <h2 className="text-sm mb-2">Bonne appétit !</h2>
        <MenuSection title="Entrées Rapides" items={entrees} />
        <MenuSection title="Plats Principaux" items={plats} />
        <MenuSection title="Viennoiseries" items={desserts} />
        <MenuSection title="Boissons" items={boissons} />
      </main>
      <BottomNav activeTab="menu" />
    </div>
  );
}