import { createAction } from '@reduxjs/toolkit';

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const FILTER_BY_PRODUCTS = 'FILTER_BY_PRODUCTS';

export const getAllProducts = createAction(GET_ALL_PRODUCTS);
export const searchProducts = createAction(SEARCH_PRODUCTS);
export const filterByCategory = createAction(FILTER_BY_CATEGORY);
export const filterByProducts = createAction(FILTER_BY_PRODUCTS);