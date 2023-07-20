import style from "./categories.module.scss";
import {memo} from "react";

type CategoriesProps = {
    categoryId: number;
    onChangeCategory: (i: number) => void;
};

const categories = ["All", "Meaty", "Vegetarian", "Grill", "Spicy", "Combo"];
export const Categories: React.FC = memo(({categoryId, onChangeCategory}: CategoriesProps) => {
    return (
        <div className={style.wrapper}>
            <ul>
                {categories.map((value, i) => (
                    <li key={i} onClick={() => onChangeCategory(i)}
                        className={categoryId === i ? style.activeChoice : ''}>{value}</li>)
                )}
            </ul>
        </div>
    );
});
