import PropTypes from 'prop-types';
import React from 'react';

import { H1, H2, H3, H4, H5, H6 } from './index.style';
import { GAMMA, DELTA, EPSILON, ZETA, ETA, THETA } from '../../../styles/config/modular-scale';

const propTypes = {
  above: PropTypes.string,
  below: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  lineHeight: PropTypes.string,
  scale: PropTypes.string,
  tag: PropTypes.number,
  weight: PropTypes.number,
};

const defaultProps = {
  above: '0rem',
  tag: 1,
  below: '0.66rem',
};

const Title = ({ tag, ...props }) => {
  if (tag === 1) return <H1 scale={GAMMA} {...props} />;
  if (tag === 2) return <H2 scale={DELTA} {...props} />;
  if (tag === 3) return <H3 scale={EPSILON} {...props} />;
  if (tag === 4) return <H4 scale={ZETA} {...props} />;
  if (tag === 5) return <H5 scale={ETA} {...props} />;
  if (tag === 6) return <H6 scale={THETA} {...props} />;
  return null;
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
