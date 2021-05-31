import React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <CssBaseline />
        <Component {...pageProps} />
      </>
    );
  }
}
