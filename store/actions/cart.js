import { createAction } from '@reduxjs/toolkit';

export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_ORDER = 'ADD_TO_ORDER';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER';

export const addToCart = createAction(ADD_TO_CART);
export const addToOrder = createAction(ADD_TO_ORDER);
export const removeFromCart = createAction(REMOVE_FROM_CART);
export const removeFromOrder = createAction(REMOVE_FROM_ORDER);

