import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import {Pizza, PizzaSliceState, SearchPizzaParams, Status} from "./pizzaTypes.ts";

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING, //loading | success | error
}

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const {sortBy, category, search, currentPage} = params;
        const {data} = await axios.get<Pizza[]>(`https://647bd36ec0bae2880ad0459f.mockapi.io/items?page=${currentPage}&limit=12&${
            category}&sortBy=${sortBy}&order=desc${search}`);
        return data;
    }
);
export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Pizza[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    }
})
export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;