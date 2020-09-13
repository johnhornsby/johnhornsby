import { css } from 'styled-components';

import { breakpoints } from '../config';

export default Object.keys(breakpoints).reduce((accumulator, key) => {
  accumulator[key] = (styles) => css`
    @media screen and (max-width: ${breakpoints[key] - 1}px) {
      ${styles}
    }
  `;

  return accumulator;
}, {});
