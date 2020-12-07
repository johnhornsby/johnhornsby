import { createGlobalStyle } from 'styled-components';

import { forEachBreakpoint } from './utils';
import { spacing } from './config';
import { PAGE_TRANSITION_MS } from '../constants';

const GlobalStyle = createGlobalStyle`
  :root {
    ${forEachBreakpoint(spacing, (_, space) => `--spacing: ${space}rem;`)}
    font-family: ${({ theme }) => theme.typography.baseFontFamily};
    font-weight: ${({ theme }) => theme.typography.baseFontWeight};
    font-size: ${({ theme }) => theme.typography.baseFontSize};
    color: ${({ theme }) => theme.colors.black};
  }

  a,
  a:hover,
  a:visited {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* perspective-origin: center; */
    perspective: 1000px;
    width: 100%;
    background: white;
  }

  .PageContent {
    background: white;
    overflow: scroll;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition:
      opacity ${PAGE_TRANSITION_MS}ms ease-in,
      transform ${PAGE_TRANSITION_MS}ms ease-in;
    will-change: transform, opacity;

    &-enter {
      opacity: 0;
      transform: translate3d(0px, 0px, 350px);
    }
    &-enter-active,
    &-enter-done {
      opacity: 1;

      ${'' /* overflow: hidden; */}
      transform: translate3d(0px, 0px, 0px);
    }
    &-exit {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }
    &-exit-active,
    &-exit-done {
      opacity: 0;
      ${'' /* overflow: hidden; */}
      transform: translate3d(0px, 0px, -500px);
    }
  }

`;

export default GlobalStyle;
