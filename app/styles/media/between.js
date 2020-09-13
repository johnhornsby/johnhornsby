import { css } from 'styled-components';

import { breakpoints } from '../config';

export default Object.keys(breakpoints).reduce((fromAccumulator, fromKey) => {
  const from = fromAccumulator;

  from[fromKey] = Object.keys(breakpoints).reduce((toAccumulator, toKey) => {
    const to = toAccumulator;

    const minWidth = `(min-width: ${breakpoints[fromKey]}px)`;
    const maxWidth = `(max-width: ${breakpoints[toKey] - 1}px)`;

    to[toKey] = (styles) => css`
      @media screen and ${minWidth} and ${maxWidth} {
        ${styles}
      }
    `;

    return to;
  }, {});

  return from;
}, {});
