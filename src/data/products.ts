
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Modern Desk Lamp",
    description: "Elegant desk lamp with adjustable brightness perfect for your home office setup.",
    price: 49.99,
    image: "/placeholder.svg",
    category: "Home Decor"
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    description: "Premium quality wireless earbuds with noise cancellation and long battery life.",
    price: 129.99,
    image: "/placeholder.svg",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Leather Wallet",
    description: "Handcrafted genuine leather wallet with multiple card slots and RFID protection.",
    price: 39.99,
    image: "/placeholder.svg",
    category: "Accessories"
  },
  {
    id: 4,
    name: "Smart Watch",
    description: "Feature-packed smartwatch with health tracking, notifications, and a beautiful display.",
    price: 199.99,
    image: "/placeholder.svg",
    category: "Electronics"
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug",
    description: "Stylish ceramic coffee mug that keeps your drinks hot for longer periods.",
    price: 19.99,
    image: "/placeholder.svg",
    category: "Kitchen"
  },
  {
    id: 6,
    name: "Notebook Set",
    description: "Set of 3 premium notebooks with high-quality paper for smooth writing experience.",
    price: 24.99,
    image: "/placeholder.svg",
    category: "Stationery"
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    description: "Compact Bluetooth speaker with impressive sound quality and 20-hour battery life.",
    price: 79.99,
    image: "/placeholder.svg",
    category: "Electronics"
  },
  {
    id: 8,
    name: "Scented Candle Set",
    description: "Set of 4 scented candles with natural fragrances to create a calming atmosphere.",
    price: 34.99,
    image: "/placeholder.svg",
    category: "Home Decor"
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));
