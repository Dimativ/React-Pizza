import style from "./leftHeader.module.css"
import logo from "../../../../assets/headerPics/mainLogo.png"
import {Link} from "react-router-dom";

const LeftHeader: React.FC = () => {
    return (
        <Link className={style.wrapper} to="/">
            <img className={style.logo} src={logo}></img>
            <div className={style.textPart}>
                <p className={style.titleText}>REACT PIZZA</p>
                <p className={style.text}>the most delicious pizza in the universe</p>
            </div>
        </Link>

    );
}

export default LeftHeader;