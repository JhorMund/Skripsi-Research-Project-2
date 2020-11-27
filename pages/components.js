import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Layout from 'components/layout';
import Products from '../components/products';

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
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
        <div id="images">
          <div className={classes.title}>
            <h2>Product</h2>
          </div>
          <br /><br/><br/>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <Layout>
            <Products />
            </Layout>
          </div>
  
        </div>
      </div>
    </div>
    <div className={classes.space50} />
      <br/>
      
      <Footer />
    </div>
  );
}
