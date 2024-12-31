import React from 'react';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { Map } from '../components/Map';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header />
      <main>
        <Map />
        <div className="p-4">
          <h1 className="text-blue-500 font-bold text-lg mb-1">FUSION TRUCK</h1>
          <p className="text-sm text-gray-600">
            Le seul food truck qui fusionne les plats. Mélangez pour mieux savourer. 
            Le monde dans votre assiette.
          </p>
          <div className="mt-4">
            <h2 className="font-semibold mb-2">Horaires</h2>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-sm">
                <span className="font-medium">Lundi - Vendredi:</span> 11h30 - 14h30
              </p>
              <p className="text-sm text-purple-700 mt-1">
                Actuellement: {new Date().getHours() >= 11.5 && new Date().getHours() <= 14.5 ? 'Ouvert' : 'Fermé'}
              </p>
            </div>
          </div>
        </div>
      </main>
      <BottomNav activeTab="carte" />
    </div>
  );
}