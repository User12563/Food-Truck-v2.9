import React from 'react';
import { MapPin, Heart, Menu as MenuIcon, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BottomNavProps {
  activeTab: 'carte' | 'favoris' | 'menu' | 'panier';
}

export function BottomNav({ activeTab }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-purple-50 border-t border-purple-100">
      <div className="flex justify-around py-3">
        <NavItem to="/" icon={<MapPin />} label="Carte" active={activeTab === 'carte'} />
        <NavItem to="/favoris" icon={<Heart />} label="Favoris" active={activeTab === 'favoris'} />
        <NavItem to="/menu" icon={<MenuIcon />} label="Menu" active={activeTab === 'menu'} />
        <NavItem to="/panier" icon={<ShoppingBag />} label="Panier" active={activeTab === 'panier'} />
      </div>
    </nav>
  );
}

function NavItem({ 
  icon, 
  label, 
  active, 
  to 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active: boolean;
  to: string;
}) {
  return (
    <Link to={to} className={`flex flex-col items-center ${active ? 'text-purple-700' : 'text-gray-500'}`}>
      {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}