import style from "./categoriesAndSort.module.css"
import Categories from "./categories/categories";
import Sort from "./sort/sort";
import {setCategoryId} from "../../../../store/slices/filter/filterSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {selectFilterCategoryId} from "../../../../store/slices/filter/filterSelectors.ts";

const CategoriesAndSort: React.FC = () => {
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

export default CategoriesAndSort;