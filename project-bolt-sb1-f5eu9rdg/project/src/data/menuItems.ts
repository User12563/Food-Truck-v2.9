export interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: 'entrees' | 'plats' | 'desserts' | 'boissons';
}

export const menuItems: MenuItem[] = [
  // Entrées
  {
    id: 1,
    title: "Mini Nachos Asiatiques",
    description: "Nachos croustillants avec sauce asiatique épicée",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d",
    category: "entrees"
  },
  {
    id: 2,
    title: "Tacos Gyros",
    description: "Tacos garnis de gyros à la grecque",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f",
    category: "entrees"
  },
  // Plats Principaux
  {
    id: 3,
    title: "Burger Fusion",
    description: "Notre spécialité avec sauce fusion maison",
    price: 8.00,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    category: "plats"
  },
  {
    id: 4,
    title: "Wrap Thai-Carbonara",
    description: "Wrap fusion italien-thaï avec sauce carbonara au curry",
    price: 7.50,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
    category: "plats"
  },
  {
    id: 5,
    title: "Quesadilla Curry",
    description: "Quesadilla au poulet tikka masala",
    price: 7.00,
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f",
    category: "plats"
  },
  // Desserts
  {
    id: 6,
    title: "Tiramisu Matcha",
    description: "Tiramisu au thé vert matcha",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1546024048-fbf6542b8f41",
    category: "desserts"
  },
  {
    id: 7,
    title: "Crêpes Nutella Banane",
    description: "Crêpes garnies de Nutella et bananes fraîches",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548",
    category: "desserts"
  },
  // Boissons
  {
    id: 8,
    title: "Limonade Basilic-Menthe",
    description: "Limonade maison aux herbes fraîches",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
    category: "boissons"
  },
  {
    id: 9,
    title: "Thé Glacé Hibiscus",
    description: "Thé glacé à l'hibiscus fait maison",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
    category: "boissons"
  }
];