import React from 'react';
import App from 'next/app';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StylesProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    );
  }
}
