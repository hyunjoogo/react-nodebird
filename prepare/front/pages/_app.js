import React from "react";
import 'antd/dist/antd.css';
import Head from 'next/head';
import PropTypes from "prop-types";

import wrapper from "../store/configureStore";

// 공통부분인 것은 이곳에서
const App = ({Component}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>NodeBird</title>
      </Head>
      <Component/>
    </>
  )
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);
