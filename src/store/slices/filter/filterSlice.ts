import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FilterSliceState, Sort, SortPropertyEnum} from "./filterTypes.ts";


const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: "popularity",
        sortProperty: SortPropertyEnum.RATING,
    },
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setSortType(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            state.currentPage = Number(action.payload.currentPage);
            state.sort = action.payload.sort;
            state.categoryId = Number(action.payload.categoryId);
        },
    },
})

export const {setCategoryId, setSearchValue, setSortType, setCurrentPage, setFilters} = filterSlice.actions

export default filterSlice.reducer