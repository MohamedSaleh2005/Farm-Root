import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartslice";
import searchReducer  from "./search/searchslice"
import filterReducer  from "./filter/filterslice"

export const store = configureStore({

    reducer: {
        cart: cartReducer,
        search: searchReducer,
        filter: filterReducer
    }
})