import React from "react";
import App from "next/app";
import Head from "next/head";
import DefaultLayout from "../components/layouts/default-layout";
import "bootstrap/dist/css/bootstrap.css";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    // uselax
    // useLax();

    return (
      <>
        <Head>
          {/* font family */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins"
            rel="stylesheet"
          ></link>
          {/* custom css */}
          <link rel="stylesheet" href="/assets/css/global.css" />
        </Head>
        {/* <SnackbarProvider> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </SnackbarProvider> */}
      </>
    );
  }
}

export default MyApp;
