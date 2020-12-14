import App from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/config';
import { gtmPageView } from '../lib/gtm';
import { storeScrollTop, restoreScrollTop } from '../lib/persistentScroll';

export default class MyApp extends App {
  handleRouteChangeComplete = (url) => {
    gtmPageView(url);
    restoreScrollTop(url);
  };

  handleRouteChangeStart = (url) => {
    storeScrollTop(Router.asPath); // store current route
  };

  componentDidMount() {
    Router.events.on('routeChangeStart', this.handleRouteChangeStart);
    Router.events.on('routeChangeComplete', this.handleRouteChangeComplete);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.handleRouteChangeStart);
    Router.events.off('routeChangeComplete', this.handleRouteChangeComplete);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
