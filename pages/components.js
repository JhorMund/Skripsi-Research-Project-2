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
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import Layout from 'components/layout';
import Products from '../components/products';

import mangga from "assets/img/product/mangga.jpg";
import cengkeh from "assets/img/product/cengkeh.jpg";
import kol from "assets/img/product/sayurkol.jpg";
import kayumanis from "assets/img/product/kentang.jpg";
import manggis from "assets/img/product/manggis.jpg";
import pala from "assets/img/product/pala.jpg";
// sections for this page
//import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
//import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
//import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
//import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
//import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
//import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
//import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
//import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
//import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
//import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
//import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
//import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";

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
          <br />
          <GridContainer justify="center">
            <td>
            <GridItem xs={12} sm={2}>
            <h4>Mangga</h4>
              <img
                src={mangga}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            </td>
            <br/>
            <td>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Cengkeh</h4>
              <img
                src={cengkeh}
                alt="..."
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />
            </GridItem>
            </td><br/>
            <td>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Kol</h4>
              <img
                src={kol}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            </td>
            <br/>
            <td>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Kentang</h4>
              <img
                src={kayumanis}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            </td>
            <br/>
            <td>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Pala</h4>
              <img
                src={pala}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            </td>
            <td>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <h4>Manggis</h4>
              <img
                src={manggis}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
            </td>
          </GridContainer>
        </div>
      </div>
    </div>
    <div className={classes.space50} />
      <br/><br/><br/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Layout>
        <Products />
        </Layout>
      </div>
      
      <Footer />
    </div>
  );
}
