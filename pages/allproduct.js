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

import alpukat from "assets/img/product/alpukat.jpg";
import jeruk from "assets/img/product/jeruk.jpg";
import manggis from "assets/img/product/manggis.jpg";
import mangga from "assets/img/product/mangga.jpg";
import sayurkol from "assets/img/product/sayurkol.jpg";
import daunsingkong from "assets/img/product/daunsingkong.jpg";
import buncis from "assets/img/product/buncis.jpg";
import selada from "assets/img/product/selada.jpg";
import bawang from "assets/img/product/bawang.jpg";
import kayumanis from "assets/img/product/kayumanis.jpg";
import pala from "assets/img/product/pala.jpg";
import cengkeh from "assets/img/product/cengkeh.jpg";
import kentang from "assets/img/product/kentang.jpg";
import wortel from "assets/img/product/wortel.jpg";
import singkong from "assets/img/product/singkong.jpg";
import ubijalar from "assets/img/product/ubijalar.jpg";

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
                              href="../detailjeruk"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={jeruk}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <Button
                              href="../detailmangga"
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
                            <br/>
                            <Button
                              href="../detaildaunsingkong"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={daunsingkong}
                              className={navImageClasses}
                            />
                            <br/>
                            <Button
                              href="../detailselada"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={selada}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <br/>
                            <Button
                              href="../detailbuncis"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={buncis}
                              className={navImageClasses}
                            />
                            <br/>
                            <Button
                              href="../detailsayurkol"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
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
                            <br/>
                            <Button
                              href="../detailpala"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                              <img
                                alt="..."
                                src={pala}
                                className={navImageClasses}
                              />
                              <br/>
                            <Button
                              href="../detailcengkeh"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                              <img
                                alt="..."
                                src={cengkeh}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                            <br/>
                            <Button
                              href="../detailbawang"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                              <img
                                alt="..."
                                src={bawang}
                                className={navImageClasses}
                              />
                            <br/>
                            <Button
                              href="../detailkayumanis"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                              <img
                                alt="..."
                                src={kayumanis}
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
                          <br/>
                            <Button
                              href="../detailkentang"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={kentang}
                              className={navImageClasses}
                            />
                            <br/>
                            <Button
                              href="../detailwortel"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={wortel}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <br/>
                            <Button
                              href="../detailsingkong"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={singkong}
                              className={navImageClasses}
                            />
                            <br/>
                            <Button
                              href="../detailubijalar"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Produk
                            </Button>
                            <img
                              alt="..."
                              src={ubijalar}
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
