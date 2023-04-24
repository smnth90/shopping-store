import { ActionTypes as T }  from "../constants/action-types";
import { Product } from "../constants/product-interface";

export const setProducts = (products: Array<Product>) => {
    return {
        type: T.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product: Product) => {
    return {
        type: T.SELECTED_PRODUCT,
        payload: product
    }
}
export const productAddToCart = (id: number) => {
    return {
        type: T.PRODUCT_ADD_TO_CART,
        payload: id
    }
}