import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";

const store = configureStore({
    reducer: {
        products: productsReducer
    },
});

export default store