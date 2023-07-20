import {CartHeader, PayNowBack, ItemsAndPrice, EmptyCart, CartItemBlock} from "../../index";
import style from "./cart.module.scss"

import {useSelector} from "react-redux";
import {selectCart} from "../../../store/slices/cart/cartSelectors.ts";

const Cart: React.FC = () => {
    const {totalPrice, items} = useSelector(selectCart);

    if (!totalPrice) {
        return <EmptyCart/>
    }
    return (
        <div className={style.wrapper}>
            <CartHeader/>
            {
                items.map(item => <CartItemBlock key={item.id} {...item}/>)
            }
            <ItemsAndPrice/>
            <PayNowBack/>
        </div>
    );
}

export default Cart;