import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from "../store/actions/cart";
import * as wishListActions from '../store/actions/wishlist';

import ButtonLink from '../components/button-link';

import CurrencyFormat from 'react-currency-format';

const ProductItem = ({ id, image, name, price, description, category }) => {

    const product = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    return (
        <div>
            {/* <img src={image} /> */}
            <h1>{name}</h1>
            <h3><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></h3>
            <p>{description}</p>
            <p>Category : {category}</p>
            <button onClick={() => { dispatch(wishListActions.addToWishList(product[id - 1])) }}>Add To Wishlist</button>
            <ButtonLink title="View" id={id} path="product-detail" />
            <button onClick={() => { dispatch(cartActions.addToCart(product[id - 1])) }}>Add To Cart</button>
        </div>
    )
}

export default ProductItem;