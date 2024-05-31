import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Config } from '../app/config';

const CommonLayout = () => {
    return (
        <>
            <NavBar brand={Config.uiMasterData.siteBrand} />
            <main className="flex flex-col bg-green-50 min-h-screen">
                <Outlet />
            </main>
        </>
    );
};

export default CommonLayout;