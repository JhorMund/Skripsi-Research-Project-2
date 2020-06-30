import { useSelector, useDispatch } from 'react-redux';

import Layout from '../components/layout';
import Header from '../components/header';

import * as wishListActions from '../store/actions/wishlist';

import CurrencyFormat from 'react-currency-format';

const WishListItem = ({ id, name, price, description, category, image }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h4>{name}</h4>
            <img src={image} />
            <p>Price : <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></p>
            <p>{description}</p>
            <p>Category: {category}</p>
            <button onClick={() => { dispatch(wishListActions.removeFromWishList(id)) }}>Remove</button>
        </div>
    )
}

const WishList = () => {
    const wishListItems = useSelector(state => {
        const transformedWishListItems = [];
        for (const key in state.wishlist.items) {
            transformedWishListItems.push({
                productId: key,
                productName: state.wishlist.items[key].productName,
                productPrice: state.wishlist.items[key].productPrice,
                productDescription: state.wishlist.items[key].productDescription,
                productCategory: state.wishlist.items[key].productCategory,
                productImage: state.wishlist.items[key].productImage
            });
        }
        return transformedWishListItems;
    });

    return (
        <Layout>
            <Header />
            {
                wishListItems.length === 0
                    ? <h2>Your Wish List is Empty</h2>
                    : wishListItems.map(item =>
                        <WishListItem
                            key={item.productId}
                            id={item.productId}
                            name={item.productName}
                            price={item.productPrice}
                            description={item.productDescription}
                            category={item.productCategory}
                            image={item.productImage}
                        />
                    )
            }
        </Layout>
    )
}

export default WishList;