import { css } from 'styled-components';

import { breakpoints } from '../config';

export default Object.keys(breakpoints).reduce((accumulator, key) => {
  accumulator[key] = (styles) => css`
    @media screen and (min-width: ${breakpoints[key]}px) {
      ${styles}
    }
  `;

  return accumulator;
}, {});
