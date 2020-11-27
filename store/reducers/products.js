import { GET_ALL_PRODUCTS, SEARCH_PRODUCTS, FILTER_BY_CATEGORY } from "../actions/products";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    availableProducts: [
        {
            productId: '1',
            productName: 'Alpukat',
            productPrice: 5000,
            productDescription: 'Buah Alpukat segar dari modoinding, di jual 5000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'alpukat.jpg',
            productCategory: 'Buah'
        },
        {
            productId: '2',
            productName: 'Mangga',
            productPrice: 5000,
            productDescription: 'Buah Mangga segar dari modoinding, di jual 5000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'mangga.jpg',
            productCategory: 'Buah'
        },
        {
            productId: '3',
            productName: 'Manggis',
            productPrice: 5000,
            productDescription: 'Buah Manggis segar dari modoinding, di jual 5000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'manggis.jpg',
            productCategory: 'Buah'
        },
        {
            productId: '4',
            productName: 'Jeruk',
            productPrice: 5000,
            productDescription: 'Buah Jeruk segar dari modoinding, di jual 5000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'jeruk.jpg',
            productCategory: 'Buah'
        },

        {
            productId: '5',
            productName: 'Pala',
            productPrice: 20000,
            productDescription: 'Pala segar dari modoinding, di jual 20000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'pala.jpg',
            productCategory: 'Rempah'
        },
        {
            productId: '6',
            productName: 'Bawang',
            productPrice: 20000,
            productDescription: 'Bawang segar dari modoinding, di jual 20000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'bawang.jpg',
            productCategory: 'Rempah'
        },
        {
            productId: '7',
            productName: 'Cengkeh',
            productPrice: 20000,
            productDescription: 'Cengkeh segar dari modoinding, di jual 20000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'cengkeh.jpg',
            productCategory: 'Rempah'
        },
        {
            productId: '8',
            productName: 'Kayu manis',
            productPrice: 20000,
            productDescription: 'Kayu manis segar dari modoinding, di jual 20000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'kayumanis.jpg',
            productCategory: 'Rempah'
        },


        {
            productId: '9',
            productName: 'Kentang',
            productPrice: 15000,
            productDescription: 'Kentang segar dari modoinding, di jual 15000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'kentang.jpg',
            productCategory: 'Umbian'
        },
        {
            productId: '10',
            productName: 'Singkong',
            productPrice: 15000,
            productDescription: 'Singkong segar dari modoinding, di jual 15000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'singkong.jpg',
            productCategory: 'Umbian'
        },
        {
            productId: '11',
            productName: 'Wortel',
            productPrice: 15000,
            productDescription: 'Wortel segar dari modoinding, di jual 15000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'wortel.jpg',
            productCategory: 'Umbian'
        },
        {
            productId: '12',
            productName: 'Ubi jalar',
            productPrice: 15000,
            productDescription: 'Ubi jalar segar dari modoinding, di jual 15000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'ubijalar.jpg',
            productCategory: 'Umbian'
        },

        {
            productId: '13',
            productName: 'Daun sigkong',
            productPrice: 2000,
            productDescription: 'Daun singkong segar dari modoinding, di jual 2000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'daunsingkong.jpg',
            productCategory: 'Sayur'
        },
        {
            productId: '14',
            productName: 'Buncis',
            productPrice: 2000,
            productDescription: 'Buncis segar dari modoinding, di jual 2000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'buncis.jpg',
            productCategory: 'Sayur'
        },
        {
            productId: '15',
            productName: 'Selada',
            productPrice: 2000,
            productDescription: 'Salada segar dari modoinding, di jual 2000/Kg dan minimal pemesanan 1 Kg.',
            productImage: 'selada.jpg',
            productCategory: 'Sayur'
        },
        {
            productId: '16',
            productName: 'Kol',
            productPrice: 2000,
            productDescription: 'Sayur kol segar dari modoinding, di jual 2000/Kg dan minimal pemesanan 1 Kg.',
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