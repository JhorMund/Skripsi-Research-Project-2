import { GET_ALL_PRODUCTS, SEARCH_PRODUCTS, FILTER_BY_CATEGORY } from "../actions/products";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    availableProducts: [
        {
            productId: '1',
            productName: 'Mangga',
            productPrice: 5000,
            productDescription: 'Buah mangga ini dijual Rp.5000/Bh, ' +
                'berasal dari modoinding, ' +
                'tersedia beberapa macam buah mangga ' + 'dan untuk gambar hanya ilustrasi, untuk info lebih lengkap hubungi 081244xxxxxx.',
            productImage: 'cengkeh.jpg',
            productCategory: 'Buah'
        },
        {
            productId: '2',
            productName: 'Cengkeh',
            productPrice: 20000,
            productDescription: 'Cengkeh ini dijual Rp.20000/kg. ' + 'berasal dari Bolaang Mongondow Timur, ' +
                'dan untuk gambar hanyalah ilustrasi, ' +
                'untuk info lebih lengkap hubungi 081244xxxxxx.',
            productImage: 'cengkeh.jpg',
            productCategory: 'Rempah'
        },
        {
            productId: '3',
            productName: 'Kol',
            productPrice: 15000,
            productDescription: 'Sayur Kol segar dari modoinding, di jual 2000/bh dan minimal pemesanan 20 bh.',
            productImage: 'kentang.jpg',
            productCategory: 'Umbian'
        },
        {
            productId: '4',
            productName: 'Kol',
            productPrice: 2000,
            productDescription: 'Sayur Kol segar dari modoinding, di jual 2000/bh dan minimal pemesanan 20 bh.',
            productImage: 'sayurkol.jpg',
            productCategory: 'Sayur'
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