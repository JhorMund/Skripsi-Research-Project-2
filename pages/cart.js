import { useSelector, useDispatch } from 'react-redux';

import Layout from '../components/layout';
import Header from '../components/header';
import * as cartActions from "../store/actions/cart";

import CurrencyFormat from 'react-currency-format';
import HeaderLinks from '../components/Header/HeaderLinks';

const CartItem = ({ id, name, price, quantity, sum }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.availableProducts);

    return (
        <div>
            <p>
                <HeaderLinks/>
            </p>
            <h4>{name}</h4>
            <p>Price : <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></p>
            <p>Quantity: {quantity}</p>
            <p>SubTotal: <CurrencyFormat value={sum} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></p>
            <button onClick={() => { dispatch(cartActions.addToCart(product[id - 1])) }}>Add Quantity</button>
            <button onClick={() => { dispatch(cartActions.removeFromCart(id)) }}>Remove This Item</button>
        </div>
    )
}

const Cart = () => {
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productName: state.cart.items[key].productName,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            });
        }
        return transformedCartItems;
    });

    const totalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <Layout>
            <Header />
            {
                totalAmount === 0
                    ? <h2>Your Cart is Empty</h2>
                    : cartItems.map(item =>
                        <CartItem
                            key={item.productId}
                            id={item.productId}
                            name={item.productName}
                            price={item.productPrice}
                            quantity={item.quantity}
                            sum={item.sum}
                        />
                    )
            }
            {
                totalAmount !== 0 &&
                <h2>Grand Total: <CurrencyFormat value={totalAmount} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /> </h2>
            }
        </Layout>
    )
}

export default Cart;