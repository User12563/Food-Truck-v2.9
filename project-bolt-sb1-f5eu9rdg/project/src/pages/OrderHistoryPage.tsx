import React from 'react';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { useOrderHistory } from '../hooks/useOrderHistory';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export function OrderHistoryPage() {
  const { orders } = useOrderHistory();

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header />
      <main className="px-4">
        <h2 className="text-lg font-semibold mb-4">Historique des commandes</h2>
        {orders.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">
            Aucune commande dans l'historique
          </p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-sm border p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm text-gray-500">
                      {format(new Date(order.date), "d MMMM yyyy 'à' HH:mm", {
                        locale: fr,
                      })}
                    </p>
                    <p className="font-medium">Total: {order.total.toFixed(2)}€</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'terminé'
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'prêt'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="space-y-2">
                  {order.items.map(({ item, quantity }) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {quantity}x {item.title}
                      </span>
                      <span className="text-gray-600">
                        {(item.price * quantity).toFixed(2)}€
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <BottomNav activeTab="menu" />
    </div>
  );
}