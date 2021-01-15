import React, { Component } from "react";
import Router from "next/router";
import firebase from '../components/config/firebase';

import Layout from '../components/layout';
import Header from '../components/header';
import Search from '../components/search';
import Products from '../components/products';

console.log("coba lia => ", firebase);

export default class Index extends Component {

  componentDidMount = () => {
    Router.push("/login");
  };

  render() {
    return <div />;
  }
}
