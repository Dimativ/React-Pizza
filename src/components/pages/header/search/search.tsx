import style from "./search.module.scss";
import loupe from "../../../../assets/headerPics/loupe.png";

import debounce from "lodash.debounce";

import {useCallback, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../../../store/slices/filter/filterSlice.ts";

export const Search: React.FC = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>();

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current?.focus();
    }

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 250),
        [],
    )

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value)
    }

    return (
        <div className={style.wrapper}>
            <img alt="loupe" className={style.loupe} src={loupe}></img>
            <input ref={inputRef} value={value} onChange={onChangeInput}
                   className={style.search} placeholder="Search pizza..."></input>
            {value && (
                <svg onClick={onClickClear} className={style.closeIcon} height="48" viewBox="0 0 48 48" width="48"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                    <path d="M0 0h48v48h-48z" fill="none"/>
                </svg>
            )}
        </div>

    );
}
