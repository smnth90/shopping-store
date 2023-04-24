import { ActionTypes as T }  from "../constants/action-types";
import { Product, CartItem } from "../constants/product-interface";


interface InitalState {
    products: Array<Product>,
    selectedProduct: Product,
    cartItems: Array<CartItem>
}

const defaultState: InitalState = {
    products: [],
    selectedProduct: {
        id: -1,
        title: '',
        price: -1,
        category: '',
        image: ''
    },
    cartItems: []
}

export const productsReducer = (state: InitalState = defaultState, action: any) => {
    switch (action.type) {
        case T.SET_PRODUCTS: 
            return {...state, products: action.payload};
        case T.SELECTED_PRODUCT:
            return {...state, selectedProduct: action.payload};
        case T.PRODUCT_ADD_TO_CART:
            // If productId is present in cartItems, increment the quantity
            let ind = state.cartItems.findIndex(cartItem => cartItem.id === action.payload);
            if (ind > -1) {
                return {...state, cartItems: state.cartItems.map(({id, quantity}) => 
                     (id === action.payload) ? {id: id, quantity: ++quantity} : {id,quantity}
                )}
            }
            // Else, push productId and quantity as 1
            return {...state, cartItems: [...state.cartItems, {id: action.payload, quantity: 1}]}
        default:
            return state;
    }
}