import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Order } from '../types/order';

interface OrderHistoryStore {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

export const useOrderHistory = create<OrderHistoryStore>()(
  persist(
    (set) => ({
      orders: [],
      addOrder: (order) => {
        set((state) => ({
          orders: [order, ...state.orders],
        }));
      },
      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId ? { ...order, status } : order
          ),
        }));
      },
    }),
    {
      name: 'order-history-storage',
    }
  )
);