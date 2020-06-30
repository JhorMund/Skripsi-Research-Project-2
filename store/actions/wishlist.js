import { createAction } from '@reduxjs/toolkit';

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

export const addToWishList = createAction(ADD_TO_WISHLIST);
export const removeFromWishList = createAction(REMOVE_FROM_WISHLIST);