import { createReducer } from '@reduxjs/toolkit';
import { ADD_TO_ORDER, REMOVE_FROM_ORDER } from "../actions/order";

const initialState = {
    items: {},
    totalAmount: 0
};

const orderReducer = createReducer(initialState, {
    [ADD_TO_ORDER]: (state, action) => {
        const {
            productId,
            productName,
            productPrice,
            productDescription,
            productImage,
            productCategory
        } = action.payload;

        let updatedOrNewOrderItem;

        if (state.items[productId]) {
            updatedOrNewOrderItem = {
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
            updatedOrNewOrderItem = {
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
            items: { ...state.items, [productId]: updatedOrNewOrderItem },
            totalAmount: state.totalAmount + productPrice
        };
    },
    [REMOVE_FROM_ORDER]: (state, action) => {
        const {
            productId,
            productName,
            productPrice,
            productDescription,
            productImage,
            productCategory,
            quantity
        } = state.items[action.payload];

        let updatedOrderItems;

        if (quantity > 1) {
            //need to reduce, not erase it
            updatedOrderItems = {
                productId,
                productName,
                productPrice,
                productDescription,
                productImage,
                productCategory,
                quantity: state.items[productId].quantity - 1,
                sum: state.items[productId].sum - productPrice
            }
            updatedOrderItems = { ...state.items, [action.payload]: updatedOrderItems };
        } else {
            updatedOrderItems = { ...state.items };
            delete updatedOrderItems[action.payload];
        }

        return {
            ...state,
            items: updatedOrderItems,
            totalAmount: state.totalAmount - productPrice
        };
    }
})

export default orderReducer;