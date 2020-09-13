import styled, { css } from 'styled-components';

import { fontSize } from '../../../styles/config/modular-scale';

const title = css`
  margin: 0;
  margin-top: ${({ above }) => above};
  margin-bottom: ${({ below }) => below};
  font-family: ${({ theme }) => theme.typography.titleFontFamily};
  ${({ weight, theme }) => `font-weight: ${weight ? weight : theme.typography.titleFontWeight};`};
  ${({ lineHeight, theme }) =>
    `line-height: ${lineHeight ? lineHeight : theme.typography.titleLineHeight};`};
  ${({ color, theme }) => `color: ${color ? color : theme.colors.black};`};
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
