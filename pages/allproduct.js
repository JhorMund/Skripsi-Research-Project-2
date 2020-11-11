import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
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
          <Typography color="textPrimary">Detail Product</Typography>
        </Breadcrumbs> 
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
                          <Link
                              href="../detailalpukat"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Alpukat
                            </Link>
                            <img
                              alt="..."
                              src={alpukat}
                              className={navImageClasses}
                            />
                            <br/>
                            <Link
                              href="../detailjeruk"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Jeruk
                            </Link>
                            <img
                              alt="..."
                              src={jeruk}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <Link
                              href="../detailmangga"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Mangga
                            </Link>
                            <img
                              alt="..."
                              src={mangga}
                              className={navImageClasses}
                            />
                            <br/>
                            <Link
                              href="../detailmanggis"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Manggis
                            </Link>
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
                            <Link
                              href="../detaildaunsingkong"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Daun Singkong
                            </Link>
                            <img
                              alt="..."
                              src={daunsingkong}
                              className={navImageClasses}
                            />
                            <br/>
                            <Link
                              href="../detailselada"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Selada
                            </Link>
                            <img
                              alt="..."
                              src={selada}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <br/>
                            <Link
                              href="../detailbuncis"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Buncis
                            </Link>
                            <img
                              alt="..."
                              src={buncis}
                              className={navImageClasses}
                            />
                            <br/>
                            <Link
                              href="../detailsayurkol"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Sayur Kol
                            </Link>
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
                            <Link
                              href="../detailpala"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Pala
                            </Link>
                              <img
                                alt="..."
                                src={pala}
                                className={navImageClasses}
                              />
                              <br/>
                            <Link
                              href="../detailcengkeh"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Cengkeh
                            </Link>
                              <img
                                alt="..."
                                src={cengkeh}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                            <br/>
                            <Link
                              href="../detailbawang"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Bawang
                            </Link>
                              <img
                                alt="..."
                                src={bawang}
                                className={navImageClasses}
                              />
                            <br/>
                            <Link
                              href="../detailkayumanis"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Kayu Manis
                            </Link>
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
                            <Link
                              href="../detailkentang"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Kentang
                            </Link>
                            <img
                              alt="..."
                              src={kentang}
                              className={navImageClasses}
                            />
                            <br/>
                            <Link
                              href="../detailwortel"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Wortel
                            </Link>
                            <img
                              alt="..."
                              src={wortel}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <br/>
                            <Link
                              href="../detailsingkong"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Singkong
                            </Link>
                            <img
                              alt="..."
                              src={singkong}
                              className={navImageClasses}
                            />
                            <br/>
                            <Link
                              href="../detailubijalar"
                              color="transparent"
                              target="_blank"
                              className={classes.navLink}
                            >
                              Detail Ubi Jalar
                            </Link>
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
