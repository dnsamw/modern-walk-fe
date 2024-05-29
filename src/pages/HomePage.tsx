import React, { useContext } from "react";
import Section from "../components/Section";
import { Config } from "../app/config";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import { Category, Product } from "../dummy_products";
import DataContext from "../app/context/DataContext";

function HomePage() {
  const { products, categories } = useContext(DataContext);

  return (
    <div className="flex flex-col bg-gray-50">
      <Section isTopNav={true} title={Config.uiMasterData.section.flash_sale}>
        {products.map((p) => (
          <ProductCard
            id={p.id}
            name={p.name}
            price={p.price.toString()}
            imgUrl={p.thumbnail}
            description={p.description}
            category={p.category}
          />
        ))}
      </Section>
      <Section title={Config.uiMasterData.section.categories}>
        {categories.map((c) => (
          <CategoryCard text={c.text} category={c.category} />
        ))}
      </Section>
    </div>
  );
}

export default HomePage;
