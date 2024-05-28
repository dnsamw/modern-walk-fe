import { CATEGORY, colorMap } from "../app/config";

type Props = {
  text: string;
  category: string;
};

function CategoryCard({ category, text }: Props) {
  const color = colorMap[category as CATEGORY];
  return (
    <div
      className={`relative w-[35%] h-[400px] flex justify-center items-center p-8 rounded-3xl shadow-[10px_15px_20px_#00000026]`}
      style={{ backgroundColor: color }}
    >
      <div className={`font-bold text-white text-5xl`}>{text}</div>
    </div>
  );
}

export default CategoryCard;
