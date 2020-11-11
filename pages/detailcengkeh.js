import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/vinyati.jpg";
import cengkeh from "assets/img/product/cengkeh1.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="TaniBisnisShop"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
        <br/>
        <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">
            Home
          </Link>
          <Link href="/allproduct">
            Detail Produk
          </Link>
          <Typography color="textPrimary">Cengkeh</Typography>
        </Breadcrumbs>
          <div className={classes.container}>
            <GridContainer justify="left">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.cengkeh}>
                  <div>
                    <br/>
                    <img src={cengkeh} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
                  </div>
                  <br/><br/>
                </div>
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
              <br/><br/><br/>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Cengkeh</h3>
                    <h6>
                      Gambar diatas hanya ilustrasi <br/>
                      <br/>
                      Rp.20.000/kg<br/>
                      min. 1kg
                    </h6>
                    <button onClick={() => { dispatch(wishListActions.addToWishList(product[id - 1])) }}>Add To Wishlist</button>
                    <button onClick={() => { dispatch(cartActions.addToCart(product[id - 1])) }}>Add To Cart</button>
                  </div>
              </GridItem>
            </GridContainer>            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
