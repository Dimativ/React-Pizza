import style from "./cartItem.module.css"
import SeparateCartLine from "./separateCartLine/separateCartLine";
import {useDispatch} from "react-redux";
import {addItem, minusItem, removeItem} from "../../../../store/slices/cart/cartSlice.ts";
import {CartItem} from "../../../../store/slices/cart/cartTypes.ts";

type CartItemProps = {
    id: number;
    title: string;
    price: number;
    size: number;
    type: string;
    count: number;
    imageUrl: string;
};

const CartItemBlock: React.FC = ({id, title, price, size, type, count, imageUrl}: CartItemProps) => {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            } as CartItem),
        );
    };
    const onClickMinus = () => {
        dispatch(
            minusItem(id)
        );
    };
    const onClickRemove = () => {
        dispatch(
            removeItem(id)
        );
    };

    return (
        <div className={style.wrapper}>
            <SeparateCartLine/>
            <div className={style.item}>
                <img alt="pizza" src={imageUrl} className={style.pizzaImg}></img>
                <div className={style.textBlock}>
                    <h1 className={style.title}>{title}</h1>
                    <p className={style.description}>{type}, {size} cm.</p>
                </div>
                <svg onClick={onClickMinus} className={style.minus} version="1.1" viewBox="0 0 512 512" width="512px"
                     xml:space="preserve"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path
                            d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7     c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7     C446.7,361.1,361.1,446.7,256,446.7z"/>
                    <rect height="17" width="256" x="128" y="248"/>
                </svg>
                <p className={style.count}>{count}</p>
                <svg onClick={onClickPlus} className={style.plus} version="1.1" viewBox="0 0 512 512" width="512px"
                     xml:space="preserve"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7     c-105.1,0-190.7-85.5-190.7-190.7S150.9,65.3,256,65.3S446.7,150.9,446.7,256S361.1,446.7,256,446.7z"/>
                    <polygon
                        points="264.1,128 247.3,128 247.3,247.9 128,247.9 128,264.7 247.3,264.7 247.3,384 264.1,384 264.1,264.7 384,264.7     384,247.9 264.1,247.9   "/>
                </svg>
                <p className={style.price}>{price * count} ₴</p>
                <svg onClick={onClickRemove} className={style.delete} viewBox="0 0 128 128"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/>
                    <path
                        d="M92.12,35.79a3,3,0,0,0-4.24,0L64,59.75l-23.87-24A3,3,0,0,0,35.88,40L59.76,64,35.88,88a3,3,0,0,0,4.25,4.24L64,68.25l23.88,24A3,3,0,0,0,92.13,88L68.24,64,92.13,40A3,3,0,0,0,92.12,35.79Z"/>
                </svg>
            </div>
        </div>
    );
}

export default CartItemBlock;