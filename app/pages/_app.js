import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Reset } from 'styled-reset';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/config';
import { PAGE_TRANSITION_MS } from '../constants';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    console.log('MyApp.render()', this.props);
    return (
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <TransitionGroup component={null}>
          <CSSTransition key={router.asPath} classNames="PageContent" timeout={PAGE_TRANSITION_MS}>
            <div class="PageContent">
              <Component {...pageProps} router={router} />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </ThemeProvider>
    );
  }
}
