import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Config } from "../app/config";
import { useContext } from "react";
import DataContext from "../app/context/DataContext";

type Props = {
  isTopNav?: boolean;
};

const CommonLayout = ({ isTopNav = false }: Props) => {

  const {products} = useContext(DataContext)

  return (
    <>
      <NavBar brand={Config.uiMasterData.siteBrand} />
      <main
        className={`flex flex-col ${
          isTopNav ? "mt-30" : "mt-2"
        }`}
      >
        <Outlet context={{products}} />
      </main>
    </>
  );
};

export default CommonLayout;
