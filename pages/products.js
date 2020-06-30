import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './product-item';

import HeaderLinks from "components/Header/HeaderLinks.js";

import Header from "components/Header/Header.js";

import Footer from "components/Footer/Footer.js";

import * as productActions from '../store/actions/products';

const Products = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products.availableProducts);
    const searchProducts = useSelector(state => state.products.searchProducts);
    const category = useSelector(state => state.products.productCategory);
    const filteredProduct = useSelector(state => state.products.filteredProduct);

    return (
        <div>
            <div style={{ flex: 1, margin: 20 }}>
                <> Search: </>
                <input
                    type='search'
                    placeholder="Cari aja dulu..."
                    onChange={e => { dispatch(productActions.searchProducts(e.target.value)) }}
                />
                <> Filter by Category: </>
                <select onChange={e => { dispatch(productActions.filterByCategory(e.target.value)) }}>
                    <option value="">All</option>
                    <option value="Rempah">Rempah</option>
                    <option value="Umbian">Umbian</option>
                    <option value="Buah">Buah</option>
                </select>
            </div>
            {
                searchProducts !== '' || category !== ''
                    ? filteredProduct.map(item => <ProductItem
                        key={item.productId}
                        id={item.productId}
                        image={item.productImage}
                        name={item.productName}
                        price={item.productPrice}
                        description={item.productDescription}
                        category={item.productCategory}
                    />)
                    : products.map(item => <ProductItem
                        key={item.productId}
                        id={item.productId}
                        image={item.productImage}
                        name={item.productName}
                        price={item.productPrice}
                        description={item.productDescription}
                        category={item.productCategory}
                    />)
            }
            <Footer/>
        </div>

    )
}

export default Products;