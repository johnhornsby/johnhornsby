import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

const ModuleStyled = styled.div`
  & + & {
    margin-top: 4rem;
  }
`;

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Module = ({ children }) => <ModuleStyled>{children}</ModuleStyled>;

Module.propTypes = propTypes;

export default Module;
