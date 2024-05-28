import React from "react";

type Props = {
  brand: string;
};

function NavBar({ brand }: Props) {
  return (
    <>
      <div className="fixed bg-white w-full top-0">
        <div className="mx-auto">
          <div className="flex justify-between items-center border-b-4 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-center lg:w-0 lg:flex-1">
              <div className="text-5xl font-bold">
                <a href="/">{brand}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
