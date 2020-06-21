import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

import alpukat from "assets/img/examples/alpukat.jpg";
import lemon1 from "assets/img/examples/lemon1.jpg";
import manggis from "assets/img/examples/manggis.jpg";
import mangga from "assets/img/examples/mangga.jpg";
import sayurkol from "assets/img/examples/sayurkol.jpg";
import daunsingkong from "assets/img/examples/daunsingkong.jpg";
import buncis from "assets/img/examples/buncis.jpg";
import selada from "assets/img/examples/selada.jpg";
import bawang from "assets/img/examples/bawang.jpg";
import kayumanis from "assets/img/examples/kayumanis.jpg";
import pala from "assets/img/examples/pala.jpg";
import cengkeh from "assets/img/examples/cengkeh.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio1 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio2 from "assets/img/examples/studio-5.jpg";
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
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Buah-buahan",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                          <Button
                              href="../detailalpukat"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={alpukat}
                              className={navImageClasses}
                            />
                            <br/>
                            <Button
                              href="../detailmanggis"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={mangga}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <Button
                              href="../detailmanggis"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={lemon1}
                              className={navImageClasses}
                            />
                            <br/>
                            <Button
                              href="../detailmanggis"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={manggis}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Sayur-sayuran",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={daunsingkong}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={selada}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={buncis}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={buncis}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={sayurkol}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                        tabButton: "Rempah-rempah",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={pala}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={cengkeh}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={kayumanis}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={bawang}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={pala}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Sembako",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                    {
                      tabButton: "Umbi-umbian",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
