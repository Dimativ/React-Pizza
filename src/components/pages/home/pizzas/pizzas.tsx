import style from "./pizzas.module.scss"
import {PizzaBlock, Skeleton} from "../../../index";
import {Status} from "../../../../store/slices/pizza/pizzaTypes";

export const Pizzas: React.FC = ({status, items}) => {
    const pizzaArr = items.map((obj) => (<PizzaBlock key={obj.id} {...obj}/>));

    return (
        <div className={style.wrapper}>
            <p className={style.title}>All pizzas</p>
            <div className={style.pizzaArea}>
                {
                    status === Status.ERROR ? (
                        <div>Error</div>) : (status === Status.LOADING ? [...new Array(6)].map((_, index) => <Skeleton
                            key={index}/>)
                        : pizzaArr)
                }
            </div>
        </div>
    );
}
