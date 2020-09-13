import styled, { css } from 'styled-components';

import { fontSize, EPSILON } from '../../../styles/config/modular-scale';

const DivStyled = styled.div`
  ${fontSize(EPSILON)}
  line-height: ${(p) => p.theme.typography.baseLineHeight};

  & p {
    margin-bottom: 1.75rem;
  }
`;

const BodyCopy = ({ content }) => (
  <DivStyled dangerouslySetInnerHTML={{ __html: content }}></DivStyled>
);

export default BodyCopy;
