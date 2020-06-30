import { GET_ALL_PRODUCTS, SEARCH_PRODUCTS, FILTER_BY_CATEGORY } from "../actions/products";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    availableProducts: [
        {
            productId: '1',
            productName: 'Cengkeh',
            productPrice: 20000,
            productDescription: 'This gergeous, three-quarter-sized arcade cabinet comes loaded ' +
                'with some classic Star Wars gaming titles, including A New Hope, ' +
                'The Empire Strikes Back, and Return of the Jedi.',
            productImage: 'cengkeh.jpg',
            productCategory: 'Rempah'
        },
        {
            productId: '4',
            productName: 'Cengkeh',
            productPrice: 20000,
            productDescription: 'This gergeous, three-quarter-sized arcade cabinet comes loaded ' +
                'with some classic Star Wars gaming titles, including A New Hope, ' +
                'The Empire Strikes Back, and Return of the Jedi.',
            productImage: 'cengkeh.jpg',
            productCategory: 'Rempah'
        },
        {
            productId: '2',
            productName: 'Kentang',
            productPrice: 15000,
            productDescription: 'For battling womp rats and tie fighters, and because you can\'t spell \"Poe Dameron\" without \"drone.\"',
            productImage: 'kentang.jpg',
            productCategory: 'Umbian'
        },
        {
            productId: '3',
            productName: 'Alpukat',
            productPrice: 25000,
            productDescription: 'If you want to show your love for the movie every day.',
            productImage: 'alpukat.jpg',
            productCategory: 'Buah'
        }
    ],
    searchProducts: '',
    productCategory: '',
    filteredProduct: []
};

const productReducer = createReducer(initialState, {
    [GET_ALL_PRODUCTS]: state => {
        return {
            ...state
        };
    },
    [SEARCH_PRODUCTS]: (state, action) => {
        const filteredProduct = state.availableProducts.filter(product => product.productName.toLowerCase().includes(action.payload.toLowerCase()));
        return {
            ...state,
            searchProducts: action.payload,
            filteredProduct
        }
    },
    [FILTER_BY_CATEGORY]: (state, action) => {
        const filteredProduct = state.availableProducts.filter(product => product.productCategory.includes(action.payload));
        return {
            ...state,
            productCategory: action.payload,
            filteredProduct
        }
    }
})


export default productReducer;