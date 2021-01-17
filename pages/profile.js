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
import profile2 from "assets/img/faces/marsle.jpg";
import profile3 from "assets/img/faces/jhordy.jpg";

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
              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile2} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <br/><br/><br/>
                    <h3 className={classes.title}>Dien Marsel</h3>
                    <h6>Mahasiswa Fakultas Ilmu Komputer Jurusan Teknik Informatika di Universitas Klabat </h6>
                    <Button href="https://web.facebook.com/marsel.dien/" justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                  </div>
                </div>
              </GridItem>

              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Vinyati Watuseke</h3>
                    <h6>Mahasiswi Fakultas Ilmu Komputer Jurusan Teknik Informatika di Universitas Klabat </h6>
                    <Button href="https://web.facebook.com/vinyatiwatuseke/" justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                  </div>
                </div>
              </GridItem>

              <GridItem xs={12} sm={12} md={4}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile3} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Mundung Jhordy</h3>
                    <h6>Mahasiswa Fakultas Ilmu Komputer Jurusan Teknik Informatika di Universitas Klabat </h6>
                    <Button href="https://web.facebook.com/profile.php?id=100011584490217" justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <Button href="https://www.instagram.com/jhordy_mundung/"justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
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
