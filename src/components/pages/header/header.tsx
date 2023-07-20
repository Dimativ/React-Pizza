import style from "./header.module.css"
import {LeftHeader, SeparateLine, RightHeader, Search} from "../../index";
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