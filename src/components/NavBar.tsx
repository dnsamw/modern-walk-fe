import { Link } from "react-router-dom";

type Props = {
  brand: string;
};

function NavBar({ brand }: Props) {
  return (
    <>
      <nav className="fixed bg-white w-full top-0">
        <div className="mx-auto">
          <div className="flex justify-between items-center border-b-4 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-center lg:w-0 lg:flex-1 w-full">
              <div className="text-5xl font-bold">
                <Link to="/">{brand}</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
