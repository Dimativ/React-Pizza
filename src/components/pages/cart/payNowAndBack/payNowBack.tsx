import style from "./payNowBack.module.css"
import {Link} from "react-router-dom";

export const PayNowBack: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <Link to="/" className={style.comeBack}>
                <svg className={style.comeBackArrow} version="1.1" viewBox="0 0 512 512"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/>
                </svg>
                <p className={style.comeBackText}>Come Back</p>
            </Link>
            <div className={style.payNow}>
                <p className={style.payNowText}>Pay Now</p>
            </div>
        </div>
    );
}
