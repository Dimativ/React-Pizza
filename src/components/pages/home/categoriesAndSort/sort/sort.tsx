import style from "./sort.module.scss";
import {memo, useEffect, useRef, useState} from "react";
import sortArrow from "../../../../../assets/sortPics/sortArrow.png";

import {setSortType} from "../../../../../store/slices/filter/filterSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {selectFilterSort} from "../../../../../store/slices/filter/filterSelectors.ts";
import {SortPropertyEnum} from "../../../../../store/slices/filter/filterTypes.ts";

type SortItem = {
    name: string;
    sortProperty: SortPropertyEnum;
};

export const listForSort: SortItem[] = [
    {name: "popularity", sortProperty: SortPropertyEnum.RATING},
    {name: "price", sortProperty: SortPropertyEnum.PRICE},
    {name: "alphabet", sortProperty: SortPropertyEnum.TITLE}];

export const Sort: React.FC = memo(() => {
    const dispatch = useDispatch();
    const sort = useSelector(selectFilterSort);
    const sortRef = useRef<HTMLDivElement>();

    const onChangeSort = (obj) => {
        dispatch(setSortType(obj))
    }

    const [open, setOpen] = useState(false);

    const onClickListItem = (i: SortItem) => {
        onChangeSort(i);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: React.MouseEvent<HTMLBodyElement>) => {
            if (!event.composedPath().includes(sortRef.current)) {
                setOpen(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        }
    }, []);

    return (
        <div ref={sortRef} className={style.wrapper}>
            <div className={style.sortLabel}>
                <img alt="sortArrow" src={sortArrow} className={style.sortArrow}></img>
                <b>Sort by:</b>
                <span onClick={() => setOpen(!open)}>{sort.name}</span>
            </div>
            {open && (
                <div className={style.sortPopup}>
                    <ul>
                        {listForSort.map((obj, i) => (
                            <li key={i} onClick={() => onClickListItem(obj)}
                                className={sort.sortProperty === obj.sortProperty ? style.active : ''}>{obj.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});

