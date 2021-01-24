import { createAction } from '@reduxjs/toolkit';

export const ADD_TO_ORDER = 'ADD_TO_ORDER';
export const REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER';

export const addToOrder = createAction(ADD_TO_ORDER);
export const removeFromOrder = createAction(REMOVE_FROM_ORDER);