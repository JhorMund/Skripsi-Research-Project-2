import React, { Component } from "react";
import Router from "next/router";

import Layout from '../components/layout';
import Header from '../components/header';
import Search from '../components/search';
import Products from '../components/products';


export default class Index extends Component {
  componentDidMount = () => {
    Router.push("/components");
  };

  render() {
    return <div />;
  }
}
