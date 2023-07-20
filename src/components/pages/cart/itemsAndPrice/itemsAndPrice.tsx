import style from "./itemsAndPrice.module.css"
import {useSelector} from "react-redux";

export const ItemsAndPrice: React.FC = () => {
    const {items, totalPrice} = useSelector(state => state.cart);
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
    return (
        <div className={style.wrapper}>
            <p className={style.count}>Total pizzas: <span>{totalCount} pcs.</span></p>
            <p className={style.price}>Order amount: <span>{totalPrice} ₴</span></p>
        </div>
    );
}
