import { useSelector, useDispatch } from 'react-redux';

import Layout from '../components/layout';
import Header from '../components/header';
import * as cartActions from "../store/actions/cart";

import CurrencyFormat from 'react-currency-format';
import HeaderLinks from '../components/Header/HeaderLinks';
import firebase from '../components/config/firebase';
import { Description } from '@material-ui/icons';


const userId = firebase.auth().currentUser.uid
console.log("data firebase ", firebase);

const CartItem = ({ id, name, price, quantity, sum, image }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.availableProducts);
    firebase.database().ref('Order/' + userId).set({
        productName: name,
        productPrice: price,
        quantity: quantity,
        total: sum
    });

    return (
        <div>
            <h4>{name}</h4>
            <img src={image} />
            <p>Price : <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></p>
            <p>Quantity: {quantity}</p>
            <p>SubTotal: <CurrencyFormat value={sum} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></p>
            <button onClick={() => { dispatch(cartActions.addToCart(product[id - 1])) }}>Add Quantity</button>
            <button onClick={() => { dispatch(cartActions.removeFromCart(id)) }}>Remove This Item</button>
            <button>Order</button>
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
                            image={item.productImage}
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