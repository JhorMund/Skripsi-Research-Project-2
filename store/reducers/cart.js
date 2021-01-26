import { ADD_TO_CART, ADD_TO_ORDER, REMOVE_FROM_CART, REMOVE_FROM_ORDER } from "../actions/cart";
import firebase, {database} from '../../components/config/firebase';

import { createReducer } from '@reduxjs/toolkit';
import { Description } from "@material-ui/icons";


const initialState = {
    items: {},
    totalAmount: 0
};

const cartReducer = createReducer(initialState, {
    [ADD_TO_CART]: (state, action) => {
        const {
            productId,
            productName,
            productPrice,
            productDescription,
            productImage,
            productCategory
        } = action.payload;

        let updatedOrNewCartItem;

        if (state.items[productId]) {
            updatedOrNewCartItem = {
                productId,
                productName,
                productPrice,
                productDescription,
                productImage,
                productCategory,
                quantity: state.items[productId].quantity + 1,
                sum: state.items[productId].sum + productPrice
            }
        } else {
            updatedOrNewCartItem = {
                productId,
                productName,
                productPrice,
                productDescription,
                productImage,
                productCategory,
                quantity: 1,
                sum: productPrice
            }
        }

        return {
            ...state,
            items: { ...state.items, [productId]: updatedOrNewCartItem },
            totalAmount: state.totalAmount + productPrice
        };
    },

    [REMOVE_FROM_CART]: (state, action) => {
        const {
            productId,
            productName,
            productPrice,
            productDescription,
            productImage,
            productCategory,
            quantity
        } = state.items[action.payload];

        let updatedCartItems;

        if (quantity > 1) {
            //need to reduce, not erase it
            updatedCartItems = {
                productId,
                productName,
                productPrice,
                productDescription,
                productImage,
                productCategory,
                quantity: state.items[productId].quantity - 1,
                sum: state.items[productId].sum - productPrice
            }
            updatedCartItems = { ...state.items, [action.payload]: updatedCartItems };
        } else {
            updatedCartItems = { ...state.items };
            delete updatedCartItems[action.payload];
        }

        return {
            ...state,
            items: updatedCartItems,
            totalAmount: state.totalAmount - productPrice
        };
    },
})

export default cartReducer;