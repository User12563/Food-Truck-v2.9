import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MenuItem } from '../data/menuItems';

interface FavoritesStore {
  items: MenuItem[];
  toggleFavorite: (item: MenuItem) => void;
  isFavorite: (itemId: number) => boolean;
}

export const useFavorites = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      items: [],
      toggleFavorite: (item) => {
        set((state) => {
          const isFavorite = state.items.some((i) => i.id === item.id);
          if (isFavorite) {
            return { items: state.items.filter((i) => i.id !== item.id) };
          }
          return { items: [...state.items, item] };
        });
      },
      isFavorite: (itemId) => {
        return get().items.some((item) => item.id === itemId);
      },
    }),
    {
      name: 'favorites-storage',
    }
  )
);