import { useSelector, useDispatch } from 'react-redux';

import Layout from '../../components/layout';
import Header from '../../components/header';

import * as cartActions from '../../store/actions/cart';
import * as wishListActions from '../../store/actions/wishlist';

const ProductDetail = props => {
    const dispatch = useDispatch();
    const selectedProduct = useSelector(state => state.products.availableProducts[props.id - 1]);

    return (
        <Layout>
            <Header />
            <img src={`../${selectedProduct.productImage}`} />
            <h1>{selectedProduct.productName}</h1>
            <h3>{selectedProduct.productPrice}</h3>
            <p>{selectedProduct.productDescription}</p>
            <p>Category: {selectedProduct.productCategory}</p>
            <button onClick={() => { dispatch(wishListActions.addToWishList(selectedProduct)) }}>Add To Wishlist</button>
            <button onClick={() => { dispatch(cartActions.addToCart(selectedProduct)) }}>Add To Cart</button>
        </Layout>
    )
};

ProductDetail.getInitialProps = (context) => {
    const { id } = context.query;
    return { id };
};

export default ProductDetail;