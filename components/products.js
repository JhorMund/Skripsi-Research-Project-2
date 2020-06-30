import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './product-item';

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
                    <option value="Games">Games</option>
                    <option value="Toys">Toys</option>
                    <option value="Accecories">Accecories</option>
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
        </div>

    )
}

export default Products;