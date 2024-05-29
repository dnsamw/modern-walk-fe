import { Link } from "react-router-dom";
import { CATEGORY, colorMap } from "../app/config";
import { truncatedText } from "../utils/utils";

type Props = {
  id: number;
  name: string;
  imgUrl: string;
  price: string;
  description: string;
  category: string;
};

function ProductCard({
  id,
  imgUrl,
  price,
  description,
  category,
  name,
}: Props) {
  const color = colorMap[category as CATEGORY];

  return (
    <Link to={`/product/${id}`}>
      <div className="min-w-[330px] md:min-w-[350px] max-w-[60%] flex flex-col justify-between min-h-[600px] rounded-3xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-gray-100 xl:max-w[100%]">
        
        <div className="font-bold text-4xl md:text-3xl px-4 pt-10 mb-2 text-center text-gray-900">
          {name}
        </div>
        
        <div className="px-8 py-4">
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
          className="p-6 rounded-t-3xl min-h[350px]"
          style={{ backgroundColor: color }}
        >
          <p className="text-white font-bold text-4xl text-center md:text-3xl">
            Rs {price}
          </p>
          <p className="text-white text-xl text-center md:text-md">
            {truncatedText(description, 80)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
