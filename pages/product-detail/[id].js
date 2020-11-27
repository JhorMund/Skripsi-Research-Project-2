import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/layout';
import Header from '../../components/header';
import * as cartActions from '../../store/actions/cart';
import * as wishListActions from '../../store/actions/wishlist';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Headerr from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";
const useStyles = makeStyles(styles);

const ProductDetail = props => {
    const dispatch = useDispatch();
    const selectedProduct = useSelector(state => state.products.availableProducts[props.id - 1]);
    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <Headerr
                brand="TaniBisnisShop"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                height: 400,
                color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/sayur.jpg")}>
                <div className={classes.container}>
                <GridContainer>
                    <GridItem>
                    <div className={classes.brand}>
                        <h1 className={classes.title}>Welcome to TaniBisnisShop</h1>
                        <h3 className={classes.subtitle}>
                        TaniBisnisShop is a research project in the last semester of computer science to me and my partner.
                        </h3>
                    </div>
                    </GridItem>
                </GridContainer>
                </div>
            </Parallax>

                <div className={classes.section}>
                    <div className={classes.container}>
                        <div className={classes.space50} />
                            <Layout>
                                <div className={classes.title}>
                                    <h2>Product</h2>
                                </div>
                                <GridContainer>
                                    <td>
                                        <GridItem xs={2} sm={10}>
                                            <img width="375" height="275" src={`../${selectedProduct.productImage}`} />
                                        </GridItem>
                                    </td><br/>
                                    <td>
                                        <GridItem xs={2} sm={10} className={classes.marginLeft}>    
                                            <h1>{selectedProduct.productName}</h1>
                                            <h3>{selectedProduct.productPrice}</h3>
                                            <p>{selectedProduct.productDescription}</p>
                                            <p>Category: {selectedProduct.productCategory}</p>
                                            <button onClick={() => { dispatch(wishListActions.addToWishList(selectedProduct)) }}>Add To Wishlist</button>
                                            <button onClick={() => { dispatch(cartActions.addToCart(selectedProduct)) }}>Add To Cart</button>
                                        </GridItem>
                                    </td>
                                </GridContainer>
                            </Layout>
                        </div>
                </div>
        </div>       
    )
};

ProductDetail.getInitialProps = (context) => {
    const { id } = context.query;
    return { id };
};

export default ProductDetail;