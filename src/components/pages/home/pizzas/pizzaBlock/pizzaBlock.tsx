import style from "./pizzaBlock.module.css"

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addItem, CartItem} from "../../../../../store/slices/cart/cartSlice.ts";
import {selectCartItemById} from "../../../../../store/slices/cart/cartSelectors.ts";


const doughType = ["thin", "traditional"];

type PizzaBlockProps = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    types: number[];
    sizes: number[];
}

export const PizzaBlock: React.FC = ({id, title, price, imageUrl, types, sizes}: PizzaBlockProps) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemById(id));

    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item: CartItem = {
            id,
            title,
            price,
            imageUrl,
            type: doughType[activeType],
            size: sizes[activeSize],
            count: 0,
        };
        dispatch(addItem(item));
    };


    return (
        <div className={style.wrapper}>
            <img
                className={style.pizzaPic}
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className={style.title}>{title}</h4>
            <div className={style.selectorBlock}>
                <ul>
                    {types.map((type, i) => (
                        <li onClick={() => setActiveType(type)} key={i}
                            className={activeType === type ? style.active : ''}>{doughType[type]}</li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, i) => (
                        <li onClick={() => setActiveSize(i)} key={i}
                            className={activeSize === i ? style.active : ''}>{size} cm.</li>
                    ))}
                </ul>
            </div>
            <div className={style.botBlock}>
                <div className={style.price}>from {price}₴</div>
                <div onClick={onClickAdd} className={style.addButton}>
                    <p className={style.plus}>+</p>
                    <span className={style.addText}>Add</span>
                    {addedCount > 0 &&
                        <p className={style.count}>{addedCount}</p>}
                </div>
            </div>
        </div>
    );
}
