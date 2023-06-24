import style from "./cartHeader.module.css"
import shopCart from "../../../../assets/cartPagePics/shoppingCart.png"
import {useDispatch} from "react-redux";
import {clearItems} from "../../../../store/slices/cart/cartSlice.ts";

const CartHeader: React.FC = () => {
    const dispatch = useDispatch();
    const onClickClear = () => {
        dispatch(
            clearItems()
        )
    }
    return (
        <div className={style.wrapper}>
            <img className={style.cartIcon} alt="shoppingCart" src={shopCart}></img>
            <h1 className={style.title}>Cart</h1>
            <div onClick={onClickClear} className={style.clearButton}>
                <svg className={style.binIcon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path className="cls-1"
                          d="M24,31H8a3,3,0,0,1-3-3V9A1,1,0,0,1,7,9V28a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V9a1,1,0,0,1,2,0V28A3,3,0,0,1,24,31Z"/>
                    <path className="cls-1" d="M28,7H4A1,1,0,0,1,4,5H28a1,1,0,0,1,0,2Z"/>
                    <path className="cls-1"
                          d="M20,7a1,1,0,0,1-1-1V3H13V6a1,1,0,0,1-2,0V2a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V6A1,1,0,0,1,20,7Z"/>
                    <path className="cls-1" d="M16,26a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0V25A1,1,0,0,1,16,26Z"/>
                    <path className="cls-1" d="M21,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,21,24Z"/>
                    <path className="cls-1" d="M11,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,11,24Z"/>
                </svg>
                <p className={style.clearCart}>Clear cart</p>
            </div>

        </div>
    );
}

export default CartHeader;