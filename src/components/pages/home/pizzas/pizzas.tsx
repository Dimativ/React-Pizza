import style from "./pizzas.module.css"
import PizzaBlock from "./pizzaBlock/pizzaBlock";
import Skeleton from "./pizzaBlock/skeleton";

const Pizzas: React.FC = ({status, items}) => {
    const pizzaArr = items.map((obj) => (<PizzaBlock key={obj.id} {...obj}/>));

    return (
        <div className={style.wrapper}>
            <p className={style.title}>All pizzas</p>
            <div className={style.pizzaArea}>
                {
                    status === 'error' ? (
                        <div>Error</div>) : (status === 'loading' ? [...new Array(6)].map((_, index) => <Skeleton
                            key={index}/>)
                        : pizzaArr)
                }
            </div>
        </div>
    );
}

export default Pizzas;