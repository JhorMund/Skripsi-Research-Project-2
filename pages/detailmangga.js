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

import mangga from "assets/img/product/mangga.jpg";


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
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.mangga}>
                  <div>
                    <br/>
                    <img src={mangga} alt="..." className={classes.imgRounded + " " + classes.imgFluid} />
                    
                  </div>
                  <br/><br/><br/>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Mangga</h3>
                    <h6>
                      Gambar diatas hanya ilustrasi <br/>
                      <br/>
                      Rp.20.000/kg<br/>
                      min. 1kg
                    </h6>
                    <Button
                      color="Danger"
                      href="../detailmangga"
                      color="transparent"
                      target="_blank"
                      className={classes.navLink}
                    >
                      Tambah
                  </Button>
                  </div>
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
