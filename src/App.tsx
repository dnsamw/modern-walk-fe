import { useEffect, useState } from "react";
import "./App.css";
import { Config } from "./app/config";
import CategoryCard from "./components/CategoryCard";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import Section from "./components/Section";
import {
  Category,
  Product,
  dummy_categories,
  dummy_products,
} from "./dummy_products";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setProducts(dummy_products as Product[]);
    setCategories(dummy_categories as Category[]);
  }, []);

  return (
    <div className="flex flex-col bg-gray-50">
      <NavBar brand={Config.uiMasterData.siteBrand} />
      <Section isTopNav={true} title={Config.uiMasterData.section.flash_sale}>
        {products.map((p) => (
          <ProductCard
            name={p.name}
            price={p.price.toString()}
            imgUrl={p.thumbnail}
            description={p.description}
            category={p.category}
          />
        ))}
      </Section>
      <Section title={Config.uiMasterData.section.categories}>
        {categories.map(c=><CategoryCard text={c.text} category={c.category}/>)}
      </Section>
    </div>
  );
}

export default App;
