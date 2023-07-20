import style from "./pagination.module.css";
import ReactPaginate from 'react-paginate';
import {setCurrentPage} from "../../../../store/slices/filter/filterSlice.ts";
import {useDispatch, useSelector} from "react-redux";

export const Pagination: React.FC = () => {
    const dispatch = useDispatch();

    const currentPage = useSelector(state => state.filter.currentPage);

    const onChangePage = (number: number) => {
        dispatch(setCurrentPage(number))
    }

    return (
        <div className={style.wrapper}>
            <ReactPaginate
                className={style.paginate}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={event => onChangePage(event.selected + 1)}
                pageRangeDisplayed={12}
                pageCount={2}
                forcePage={currentPage - 1}
                renderOnZeroPageCount={null}
            />
        </div>
    );
}
