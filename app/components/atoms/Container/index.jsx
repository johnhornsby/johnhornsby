import PropTypes from 'prop-types';
import React from 'react';

import ContainerStyled from './index.style';


const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


const Container = ({ children }) => (
  <ContainerStyled>
    {children}
  </ContainerStyled>
);


Container.propTypes = propTypes;

export default Container;
