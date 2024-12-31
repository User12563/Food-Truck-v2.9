import React from 'react';
import { MenuItem } from './MenuItem';

const menuItems = [
  { id: 1, title: 'Plat 1', description: 'Menu description.' },
  { id: 2, title: 'Plat 2', description: 'Menu description.' },
  { id: 3, title: 'Plat 3', description: 'Menu description.' },
  { id: 4, title: 'Plat 4', description: 'Menu description.' },
  { id: 5, title: 'Plat 5', description: 'Menu description.' },
  { id: 6, title: 'Plat 6', description: 'Menu description.' },
];

export function MenuList() {
  return (
    <div className="px-4">
      <h2 className="text-sm mb-2">Bonne appétit !</h2>
      <h3 className="font-semibold mb-4">Vos plats favoris</h3>
      <div className="space-y-2">
        {menuItems.map(item => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}