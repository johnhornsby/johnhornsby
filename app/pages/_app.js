import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Reset } from 'styled-reset';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/config';

export default class MyApp extends App {
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
