import styled, { css } from 'styled-components';

import { fontSize } from '../../../styles/config/modular-scale';

const title = css`
  margin: 0;
  margin-top: ${({ above }) => above};
  margin-bottom: ${({ below }) => below};
  font-family: ${(p) => p.theme.typography.titleFontFamily};
  font-weight: ${(p) => p.theme.typography.titleFontWeight};
  line-height: ${(p) => p.theme.typography.titleLineHeight};
  ${({ scale }) => fontSize(scale)}
  text-transform: uppercase;
`;

export const H1 = styled.h1`
  ${title}
`;

export const H2 = styled.h2`
  ${title}
`;

export const H3 = styled.h3`
  ${title}
`;

export const H4 = styled.h4`
  ${title}
`;

export const H5 = styled.h5`
  ${title}
`;

export const H6 = styled.h6`
  ${title}
`;
