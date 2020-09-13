import { forEachBreakpoint } from '../utils';
import { MOBILE, MOBILE_LARGE, TABLET, DESKTOP, DESKTOP_MID, DESKTOP_LARGE } from './breakpoints';
// Modular scale
// ---------------------------------------
export const TERA = 'tera';
export const GIGA = 'giga';
export const MEGA = 'mega';
export const ALPHA = 'alpha';
export const BETA = 'beta';
export const GAMMA = 'gamma';
export const DELTA = 'delta';
export const EPSILON = 'epsilon';
export const ZETA = 'zeta';
export const ETA = 'eta';
export const THETA = 'theta';

function createScale(rootSize) {
  return {
    [TERA]: rootSize * 7,
    [GIGA]: rootSize * 6,
    [MEGA]: rootSize * 5,
    [ALPHA]: rootSize * 4,
    [BETA]: rootSize * 3,
    [GAMMA]: rootSize * 2.166666, // h1
    [DELTA]: rootSize * 1.333333, // h2
    [EPSILON]: rootSize * 1.111111, // h3
    [ZETA]: rootSize, // h4
    [ETA]: rootSize * 0.833, // h5
    [THETA]: rootSize * 0.722, // h6
  };
}

// Setting responsive modular-scales. Use appropriate scales for viewport sizes.
export const modularScaleBreakpoints = {
  [MOBILE]: createScale(16),
  [MOBILE_LARGE]: createScale(18),
  [TABLET]: createScale(18),
  [DESKTOP]: createScale(18),
  [DESKTOP_MID]: createScale(20),
  [DESKTOP_LARGE]: createScale(20),
};

export const getModularScaleValues = (size) => {
  return Object.keys(modularScaleBreakpoints).map(
    (breakpointKey) => modularScaleBreakpoints[breakpointKey][size]
  );
};

export const modularScaleValuesAcrossBreakpoints = {
  [TERA]: getModularScaleValues(TERA),
  [GIGA]: getModularScaleValues(GIGA),
  [MEGA]: getModularScaleValues(MEGA),
  [ALPHA]: getModularScaleValues(ALPHA),
  [BETA]: getModularScaleValues(BETA),
  [GAMMA]: getModularScaleValues(GAMMA),
  [DELTA]: getModularScaleValues(DELTA),
  [EPSILON]: getModularScaleValues(EPSILON),
  [ZETA]: getModularScaleValues(ZETA),
  [ETA]: getModularScaleValues(ETA),
  [THETA]: getModularScaleValues(THETA),
};

export const fontSize = (size) => {
  const values = modularScaleValuesAcrossBreakpoints[size];
  return forEachBreakpoint(values, (_, size) => `font-size: ${size}px`);
};
