import App from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/config';
import { GTMPageView } from '../lib/gtm';

export default class MyApp extends App {
  componentDidMount() {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
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
