import '../App.css';
import Header from "../components/pages/header/header";
import {Outlet} from "react-router-dom";

const MainLayout: React.FC = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
}

export default MainLayout;