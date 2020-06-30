/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useSelector } from 'react-redux';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";

import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

//Dari eccomerce


import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);
const linkStyle = {
  marginRight: 15
};

export default function HeaderLinks() {
  const cart = useSelector(state => state.cart.items);
  const wishlist = useSelector(state => state.wishlist.items);
  const classes = useStyles();
  return (
    
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
        <Button
        className= {classes.navLink}
        color="transparent"
        target="_blank"
        >
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        </Button>
        <Button
        className= {classes.navLink}
        color="transparent"
        target="_blank"
        >
        <Link href="/cart">
            <a className={classes.link}>Cart({Object.keys(cart).length})</a>
        </Link>
        </Button>
        <Button
          className= {classes.navLink}
          color= "transparent"
          target="_blank"
        >
        <Link href="/wishlist">
            <a style={linkStyle}>Wishlist({Object.keys(wishlist).length})</a>
        </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <CustomDropdown
            left
            navDropdown
            hoverColor="info"
            dropdownHeader="Dropdown Header"
            buttonIcon="settings"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            dropdownList={[
              <Link href="/allproduct">
                <a className={classes.dropdownLink}>All Product</a>
              </Link>,
              <Link href="/profile">
              <a className={classes.dropdownLink}>Profile</a>
            </Link>,
            <Link href="/login">
            <a className={classes.dropdownLink}>Login</a>
          </Link>

            ]}
          />
      </ListItem>
    </List>
  );
}

