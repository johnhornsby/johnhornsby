import styled from 'styled-components';

import { forEachBreakpoint } from '../../../styles/utils';
import { maxWidths } from '../../../styles/config';

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing);
  padding-right: var(--spacing);

  ${forEachBreakpoint(maxWidths, (_, width) => `max-width: ${width}`)}
`;

export default Container;
