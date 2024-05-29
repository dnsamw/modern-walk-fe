export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: "male" | "female";
  thumbnail: string;
}

export interface Category {
  id: number;
  category: string;
  text: string;
}

export const dummy_categories = [
  {
    id: 1,
    category: "male",
    text: "Men's Clothing",
  },
  {
    id: 2,
    category: "female",
    text: "Women's Clothing",
  },
  {
    id: 3,
    category: "kids",
    text: "Children's Clothing",
  },
];

export const dummy_products = [
  {
    id: 1,
    name: "Men's Cotton Jacket",
    price: 59.99,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking",
    category: "male",
    thumbnail: "/img/jacket-m.png",
  },
  {
    id: 2,
    name: "Women's Short Sleeve",
    price: 59.99,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk",
    category: "female",
    thumbnail: "/img/tshirt-f.png",
  },
  {
    id: 5,
    name: "Kid's Dress",
    price: 59.99,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk",
    category: "kids",
    thumbnail: "/img/gown-k.png",
  },
  {
    id: 3,
    name: "Men's Cotton Jacket",
    price: 59.99,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking",
    category: "male",
    thumbnail: "/img/jacket-m.png",
  },
  {
    id: 4,
    name: "Women's Short Sleeve",
    price: 59.99,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk",
    category: "female",
    thumbnail: "/img/tshirt-f.png",
  }, {
    id: 6,
    name: "Kid's Dress",
    price: 59.99,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk",
    category: "kids",
    thumbnail: "/img/gown-k.png",
  },
];
