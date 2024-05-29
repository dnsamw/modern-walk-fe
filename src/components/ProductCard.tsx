import { Link } from "react-router-dom";
import { CATEGORY, colorMap } from "../app/config";

type Props = {
  id:number;
  name: string;
  imgUrl: string;
  price: string;
  description: string;
  category: string;
};

function ProductCard({ id, imgUrl, price, description, category, name }: Props) {

  const color = colorMap[category as CATEGORY];

  return (
    <Link to={`/product/${id}`}>
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg hover:bg-gray-100">
      <div className="px-16 py-4">
        <div className="font-bold text-3xl py-4 mb-2 text-center text-gray-900">
          {name}
        </div>
        <img
          alt={name}
          className="w-full"
          height="300"
          src={imgUrl}
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width="300"
        />
      </div>
      <div
        className="px-6 py-4 rounded-t-3xl"
        style={{ backgroundColor: color }}
      >
        <p className="text-white font-bold text-3xl text-center">Rs {price}</p>
        <p className="text-white text-base text-center">{description}...</p>
      </div>
    </div>
    </Link>
  );
}

export default ProductCard;
