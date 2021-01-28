import { useSelector, useDispatch } from 'react-redux';

import * as cartActions from "../store/actions/cart";
import * as wishListActions from '../store/actions/wishlist';

import ButtonLink from '../components/button-link';
import CurrencyFormat from 'react-currency-format';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

const ProductItem = ({ id, image, name, price, description, category }) => {

    const product = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <div>
            <GridContainer>
                <td>
                    <GridItem xs={12} sm={2}>
                        <br/>
                        <img width="375" height="275" src={image} />
                        <br/>
                    </GridItem>
                </td>
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                    <GridItem xs={12} sm={2} md={7}>
                        <h2>{name}</h2>
                        <h3><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></h3>
                        <h6 typeof="100">{description}</h6>
                        <p>Category : {category}</p>
                        {/* <button onClick={() => { dispatch(wishListActions.addToWishList(product[id - 1])) }}>Add To Wishlist</button> */}
                        <ButtonLink title="View" id={id} path="product-detail" />
                        <button onClick={() => { dispatch(cartActions.addToCart(product[id - 1])) }}>Add To Cart</button>
                    </GridItem>
                </td>
                <br/>
            </GridContainer>
        </div>
    )
}

export default ProductItem;