import { Link, useOutletContext, useParams } from "react-router-dom";
import { Product } from "../dummy_products";
import Section from "../components/Section";
import { colorMap } from "../app/config";
import Button from "../components/atoms/Button";

type Props = {};

interface OutletContextType {
  products: Product[];
}

function ProductPage({}: Props) {
  const { products }: OutletContextType = useOutletContext();
  const { id } = useParams();
  const product = products?.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  const { name, price, description, category, thumbnail } = product; 

  return (
    <div className="flex justify-center items-center min-h-full h-screen bg-white">
      <section>
        <div className="relative w-[100%] bg-gray-50 rounded-3xl h-[100%] flex p-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">

          <div className="px-4 py-2 absolute text-xl font-semibold text-white flex justify-center items-center rounded-3xl" style={{backgroundColor:colorMap[category]}}>
          <Link to={`/category/${category}-clothing`}>
            {category.toLocaleUpperCase()}
          </Link>
            </div>
          <div className="flex w-[50%] justify-center items-center">
            <img className="w-[75%]" src={thumbnail} alt={name} />
          </div>
          <div className="col w-[50%] p-8 flex flex-col gap-4 justify-center">
            <div className="HEADER flex flex-col gap-2">
              <p className="text-2xl text-gray-400">ON SALE</p>
              <h1 className="text-6xl font-bold">{name}</h1>
              <p>{category}</p>
              <div className="flex gap-4 py-2">
                <div className="Ratings">
                  <span>*****</span>
                </div>
                <div className="REVIEWS">
                  <p>35 Reviews</p>
                </div>
                <div className="SOCIAL_SHARE">fb,x,w</div>
              </div>
            </div>

            <div className="DESCRIPTION">
              <p className="text-2xl text-gray-500">{description}</p>
            </div>

            <div className="FEATURES">variations select</div>

            <div className="PURCHASE flex justify-between  border-t-2 border-gray-300 py-4">
              Rs {price}
              <div className="flex gap-2">
                <Button text="Buy" />
                <span>Like</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
