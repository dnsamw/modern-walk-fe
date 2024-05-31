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
    <>
      <Section isScroll={true} title={Config.uiMasterData.section.flash_sale}>
        <div className="mt-8 flex gap-10">
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
        </div>
      </Section>
      <Section title={Config.uiMasterData.section.categories}>
        {categories.map((c) => (
          <CategoryCard text={c.text} category={c.category} />
        ))}
      </Section>
    </>
  );
}

export default HomePage;
