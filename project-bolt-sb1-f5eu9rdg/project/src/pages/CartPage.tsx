import React from 'react';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { useCart } from '../hooks/useCart';
import { useOrderHistory } from '../hooks/useOrderHistory';
import { Trash2 } from 'lucide-react';
import { Order } from '../types/order';

export function CartPage() {
  const { items, removeItem, total, clearCart } = useCart();
  const { addOrder } = useOrderHistory();

  const handleOrder = () => {
    if (items.length === 0) return;

    const order: Order = {
      id: Math.random().toString(36).substr(2, 9),
      items: items,
      total: total(),
      date: new Date().toISOString(),
      status: 'en préparation'
    };

    addOrder(order);
    clearCart();
    alert('Commande confirmée ! Votre commande sera prête dans 15-20 minutes.');
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header />
      <main className="px-4">
        <h2 className="text-sm mb-2">Votre commande</h2>
        {items.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">Votre panier est vide</p>
        ) : (
          <>
            <div className="space-y-4">
              {items.map(({ item, quantity }) => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">Quantité: {quantity}</p>
                    <p className="text-purple-600">{(item.price * quantity).toFixed(2)}€</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 p-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <span className="font-bold">Total :</span>
              <span className="font-bold text-purple-700">{total().toFixed(2)}€</span>
            </div>
            <button
              onClick={handleOrder}
              className="w-full bg-purple-700 text-white py-3 rounded-full mt-4"
            >
              Commander
            </button>
          </>
        )}
      </main>
      <BottomNav activeTab="panier" />
    </div>
  );
}