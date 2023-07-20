import style from "./categoriesAndSort.module.css"
import {Categories, Sort} from "../../../index";
import {setCategoryId} from "../../../../store/slices/filter/filterSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {selectFilterCategoryId} from "../../../../store/slices/filter/filterSelectors.ts";

export const CategoriesAndSort: React.FC = () => {
    const dispatch = useDispatch();

    const categoryId = useSelector(selectFilterCategoryId);

    const onChangeCategory = useCallback((id: number) => {
        dispatch(setCategoryId(id));
    }, []);

    return (
        <div className={style.wrapper}>
            <Categories categoryId={categoryId} onChangeCategory={onChangeCategory}/>
            <Sort/>
        </div>
    );
}
