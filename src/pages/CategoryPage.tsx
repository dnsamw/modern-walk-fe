import { useParams } from "react-router-dom";
import Section from "../components/Section";
import { useContext } from "react";
import DataContext from "../app/context/DataContext";
import { Product } from "../dummy_products";
import ProductCard from "../components/ProductCard";

type Props = {};

function CategoryPage({}: Props) {
  const { slug } = useParams();
  const category = slug?.split("-")[0];
  const { products } = useContext(DataContext);
  const categoryProducts = products?.filter((p) => p.category === category);

  return (
    <Section title={`Category : ${category}`}>

      <div className="mt-8 flex gap-10">
          {categoryProducts.map((p) => (
            <ProductCard
              category={p.category}
              id={p.id}
              name={p.name}
              description={p.description}
              imgUrl={p.thumbnail}
              price={p.price.toString()}
            />
          ))}
        
      </div>

    </Section>
  );
}

export default CategoryPage;
