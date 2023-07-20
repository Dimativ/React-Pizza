import style from "./rightHeader.module.css"
import {Link} from "react-router-dom";
import cartIcon from "../../../../assets/headerPics/cartIcon.png"
import {useSelector} from "react-redux";
import {selectCart} from "../../../../store/slices/cart/cartSelectors.ts";

export const RightHeader: React.FC = () => {
    const {items, totalPrice} = useSelector(selectCart);
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

    return (
        <Link className={style.wrapper} to="cart">
            <span className={style.price}>{totalPrice} ₴</span>
            <div className={style.verticalLine}></div>
            <img src={cartIcon} className={style.cartIcon}></img>
            <span className={style.cartCount}>{totalCount}</span>
        </Link>
    );
}
