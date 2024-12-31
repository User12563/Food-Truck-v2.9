import { create } from 'zustand';
import { MenuItem } from '../data/menuItems';

interface CartStore {
  items: { item: MenuItem; quantity: number }[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.item.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { item, quantity: 1 }] };
    });
  },
  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((i) => i.item.id !== itemId),
    }));
  },
  clearCart: () => set({ items: [] }),
  total: () => {
    const items = get().items;
    return items.reduce((sum, { item, quantity }) => sum + item.price * quantity, 0);
  },
}));