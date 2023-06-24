import {RootState} from "../../store.ts";

export const selectFilterSort = (state: RootState) => state.filter.sort;
export const selectFilter = (state: RootState) => state.filter;
export const selectFilterCategoryId = (state: RootState) => state.filter.categoryId;