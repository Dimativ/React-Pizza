import style from "./cart.module.css"
import emptyCart from "../../../assets/cartPagePics/emptyCart.png"
import {Link} from "react-router-dom";


export const EmptyCart: React.FC = () => {
    return (
        <div className={style.empty}>
            <h1 className={style.title}>Cart is empty 😕</h1>
            <p className={style.description}>You probably haven't ordered pizza yet.<br/>
                To order pizza, go to the main page.</p>
            <img className={style.pic} alt="emptyCart" src={emptyCart}></img>
            <Link to="/" className={style.back}>Come back</Link>
        </div>
    );
}
