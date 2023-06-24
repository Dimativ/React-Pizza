import CategoriesAndSort from "./categoriesAndSort/categoriesAndSort";
import Pizzas from "./pizzas/pizzas";
import Pagination from "./pagination/pagination";
import style from "./home.module.css"

import {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import {setFilters} from "../../../store/slices/filter/filterSlice.ts";
import {listForSort} from "./categoriesAndSort/sort/sort";

import qs from "qs";
import {useNavigate} from "react-router-dom";
import {fetchPizzas} from "../../../store/slices/pizza/pizzaSlice.ts";
import {useAppDispatch} from "../../../store/store.ts";
import {selectPizza} from "../../../store/slices/pizza/pizzaSelectors.ts";
import {selectFilter} from "../../../store/slices/filter/filterSelectors.ts";
import {SearchPizzaParams} from "../../../store/slices/pizza/pizzaTypes.ts";

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const {items, status} = useSelector(selectPizza);
    const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);

    const sortBy = sort.sortProperty;

    const getPizzas = () => {
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(
            fetchPizzas({
                sortBy,
                category,
                search,
                currentPage,
            })
        );
    };

    //if the parameters were changed and there was a first render
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortBy,
                categoryId,
                currentPage,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sortBy, searchValue, currentPage]);

    //if there was a first render, then we check the URL parameters and save in Redux
    useEffect(() => {
        if (window.location.search) {
            const params = (qs.parse(window.location.search.substring(1)) as unknown) as SearchPizzaParams;
            const sort = listForSort.find(obj => obj.sortProperty === params.sortBy);
            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            );
            isSearch.current = true;
        }
    }, []);

    //if there was a first render, then we request pizzas
    useEffect(() => {
        if (!isSearch.current) {
            getPizzas();
        }
        isSearch.current = false;
    }, [categoryId, sortBy, searchValue, currentPage]);

    return (
        <div className={style.wrapper}>
            <CategoriesAndSort/>
            <Pizzas status={status} items={items}/>
            <Pagination/>
        </div>
    );
}

export default Home;
