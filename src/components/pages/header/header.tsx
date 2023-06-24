import style from "./header.module.css"
import LeftHeader from "./leftHeader/leftHeader";
import SeparateLine from "./separateLine/separateLine";
import RightHeader from "./rightHeader/rightHeader";
import Search from "./search/search";
import {useLocation} from "react-router-dom";

const Header: React.FC = () => {
    const location = useLocation();
    return (
        <>
            <div className={style.wrapper}>
                <LeftHeader/>
                <Search/>
                {location.pathname !== '/React-Pizza/cart' && (<RightHeader/>)}
            </div>
            <SeparateLine/>
        </>

    );
}

export default Header;