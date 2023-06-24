export type Pizza = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    types: number[];
    sizes: number[];
}
export type SearchPizzaParams = {
    sortBy: string;
    category: string;
    search: string;
    currentPage: string;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface PizzaSliceState {
    items: Pizza[];
    status: Status;
}