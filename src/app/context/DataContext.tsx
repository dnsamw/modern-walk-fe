import { createContext, useEffect, useState } from "react";
import {
  Category,
  Product,
  dummy_categories,
  dummy_products,
} from "../../dummy_products";

const DataContext = createContext<{
  products: Product[];
  categories: Category[];
}>({
  products: [],
  categories: [],
});

type Props = {
  children: React.ReactNode;
};

export const DataProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setProducts(dummy_products as Product[]);
    setCategories(dummy_categories as Category[]);
  }, []);

  return (
    <DataContext.Provider value={{ products, categories }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;