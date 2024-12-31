import { MenuItem } from '../data/menuItems';

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  date: string;
  status: 'en préparation' | 'prêt' | 'terminé';
}