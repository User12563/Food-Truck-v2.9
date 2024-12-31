import React from 'react';
import { MenuItem } from '../data/menuItems';
import { MenuItemCard } from './MenuItemCard';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}