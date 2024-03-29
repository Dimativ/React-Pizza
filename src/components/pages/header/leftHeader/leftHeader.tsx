import style from "./leftHeader.module.scss"
import logo from "../../../../assets/headerPics/mainLogo.png"
import {Link} from "react-router-dom";

export const LeftHeader: React.FC = () => {
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
