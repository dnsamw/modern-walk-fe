import { Outlet } from "react-router-dom"
import { Config } from "../app/config"
import NavBar from "../components/NavBar"

type Props = {}

const Root = ({}: Props) => {
  return (
    <>
    <NavBar brand={Config.uiMasterData.siteBrand} />
    <Outlet/>
    </>
  )
}

export default Root