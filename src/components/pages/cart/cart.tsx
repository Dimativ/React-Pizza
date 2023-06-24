import CartHeader from "./cartHeader/cartHeader";
import style from "./cart.module.css"
import CartItemBlock from "./cartItem/cartItemBlock.tsx";
import PayNowBack from "./payNowAndBack/payNowBack";
import ItemsAndPrice from "./itemsAndPrice/itemsAndPrice";
import EmptyCart from "./emptyCart";

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