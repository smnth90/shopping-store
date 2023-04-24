import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './reducers/product-reducer';

export default configureStore({
    reducer: {
        products: productsReducer
    },
    devTools: true
});