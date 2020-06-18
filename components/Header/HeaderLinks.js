/*eslint-disable*/
import React from "react";
import Link from "next/link";

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

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <CustomInput
                  white
                  inputRootCustomClasses={classes.inputRootCustomClasses}
                  formControlProps={{
                    className: classes.formControl
                  }}
                  inputProps={{
                    placeholder: "Search",
                    inputProps: {
                      "aria-label": "Search",
                      className: classes.searchInput
                    }
                  }}
                />
                <Button justIcon round color="transparent">
                  <Search className={classes.searchIcon} />
                </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Product"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="../allproduct">
              <a className={classes.dropdownLink}>All Product</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          href="../profile"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}></Icon> PROFILE
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="../login"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}></Icon> Login
        </Button>
        
      </ListItem>
      <ListItem className={classes.listItem}>
                  <Button
                    justIcon
                    round
                    href="#pablo"
                    className={classes.notificationNavLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    <Email className={classes.icons} />
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
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link"
                      ]}
                    />
                  </ListItem>
    </List>
    
  );
}

