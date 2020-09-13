import { css } from 'styled-components';

import { above } from '../media';
import { breakpoints } from '../config/breakpoints';

export function forEachBreakpoint(customValues, func) {
  const keys = Object.keys(breakpoints);
  if (customValues.length !== keys.length) {
    throw Error(
      `The length of custom values (${customValues.length}) does not match the length of breakpoints (${keys.length}), these are the values: ${customValues}`
    );
  }

  return css`
    ${keys.reduce(
      (cssArray, key, index) => cssArray.concat(above[key](func(key, customValues[index]))),
      []
    )}
  `;
}
