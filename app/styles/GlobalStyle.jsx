import { createGlobalStyle } from 'styled-components';

import { forEachBreakpoint } from './utils';
import { spacing } from './config';

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

`;

export default GlobalStyle;
